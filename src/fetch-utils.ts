import fetch from './fetch-cache';

interface SourceConfigObject<U> {
    allwaysUseFallback?: boolean;
    url: string;
    fallback: U | ((error?: string, resp?: Response) => U);
}
export type SourceConfigEntry<T> = string | SourceConfigObject<T>;
export type SourceConfig<T> = {
    [P in keyof T]: SourceConfigEntry<T[P]>;
};

export type Data<T> = {
    [P in keyof T]: T[P];
};

export function getData<T>(sourceConfig: SourceConfig<T>): () => Promise<Data<T>> {
    return () => new Promise((resolve) => {
        let unresolved = Object.keys(sourceConfig).length;
        const result: Data<T> = Object.keys(sourceConfig)
            .reduce((acc, key) => ({...acc, [key]: null}), {}) as Data<T>;

        const handleResponse = (key: string) => (data: any) => {
            result[key] = data;
            unresolved--;

            if (unresolved === 0) {
                resolve(result);
            }
        };

        Object.keys(sourceConfig)
            .forEach((key) => fetchJson(key, sourceConfig[key])
                .then(handleResponse(key), handleResponse(key)));
    });
}

function createErrorHandler<T>(config: SourceConfigEntry<T>) {
    return (reason?: string, resp?: Response) => {
        if (typeof config === 'string') {
            return new Error(reason);
        } else {
            const fallbackFn: (a?: string, b?: Response) => T  =
                typeof config.fallback === 'function' ?
                    (config.fallback as (a?: string, b?: Response) => T) : (a?: string, b?: Response) => config.fallback as T;

            if (config.allwaysUseFallback) {
                return fallbackFn(reason, resp);
            } else {
                if (resp && resp.status >= 500) {
                    return new Error(reason);
                } else {
                    return fallbackFn(reason, resp);
                }
            }
        }
    };
}

function fetchJson<T>(key: string, config: SourceConfigEntry<T>): Promise<T | Error> {
    const url = typeof config === 'string' ? config : config.url;
    const errorHandler = createErrorHandler(config);

    return fetch(key, url, { credentials: 'include' })
        .then((resp) => {
            if (resp.status === 200) {
                return resp.json();
            }
            return errorHandler(undefined, resp);
        }, errorHandler)
        .catch(errorHandler);
}
