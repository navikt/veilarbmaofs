import fetch from './fetch-cache';

interface SourceConfigObject<U> {
    allwaysUseFallback?: boolean;
    url: string;
    fallback: U | ((error?: string, resp?: Response) => U)
}
export type SourceConfigEntry<T> = string | SourceConfigObject<T>;
export type SourceConfig<T> = {
    [P in keyof T]: SourceConfigEntry<T[P]>;
}

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
            .forEach((key) => fetchJson(sourceConfig[key])
                .then(handleResponse(key), handleResponse(key)));
    });
}

function createErrorHandler<T>(config: SourceConfigEntry<T>) {
    return (reason?: string, resp?: Response) => {
        if (typeof config === 'string') {
            return new Error(reason);
        } else {
            const fallbackFn = typeof config.fallback === 'function' ? config.fallback : (a?: string, b?: Response) => config.fallback;

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

function fetchJson<T>(config: SourceConfigEntry<T>): Promise<T | Error> {
    const url = typeof config === 'string' ? config : config.url;
    const errorHandler = createErrorHandler(config);

    return fetch(url, { credentials: "include" })
        .then((resp) => {
            if (!resp.ok) {
                return errorHandler(undefined, resp);
            }

            return resp.json();
        }, errorHandler)
        .catch(errorHandler);
}

export function getJson(url: string): () => Promise<any> {
    return () => fetchJson<any>(url);
}
