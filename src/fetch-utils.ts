import fetch from './fetch-cache';

type Feilmelding = string & { __TYPE__: "feilmelding" };

export type SourceConfig<T> = {
    [P in keyof T]: string;
}

export function getData<T>(sourceConfig: SourceConfig<T>): () => Promise<T | Feilmelding> {
    return () => new Promise((resolve) => {
        let unresolved = Object.keys(sourceConfig).length;
        const result: T = Object.keys(sourceConfig)
            .reduce((acc, key) => ({...acc, [key]: null}), {}) as T;

        Object.keys(sourceConfig)
            .forEach((key) => fetchJson(sourceConfig[key])
                .then((data: any) => {
                    result[key] = data;
                    unresolved--;

                    if (unresolved === 0) {
                        resolve(result);
                    }
                }));
    });
}

function fetchJson<T>(url: string): Promise<T | Feilmelding> {
    return fetch(url, { credentials: "include" })
        .then((resp) => {
            if (!resp.ok) {
                return resp.statusText;
            }
            return resp.json();
        }, (error) => {
            return error as Feilmelding;
        })
        .catch((error) => {
            return error as Feilmelding;
        });
}

export function getJson(url: string): () => Promise<any> {
    return () => fetchJson<any>(url);
}