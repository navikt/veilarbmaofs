import fetch from './fetch-cache';


export type SourceConfig<T> = {
    [P in keyof T]: string;
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

function fetchJson<T>(url: string): Promise<T | Error> {
    return fetch(url, { credentials: "include" })
        .then((resp) => {
            if (!resp.ok) {
                return new Error(resp.statusText);
            }
            if(resp.status === 204){
                return null;
            }
            return resp.json();
        }, (error) => {
            return new Error(error);
        })
        .catch((error) => {
            return new Error(error);
        });
}

export function getJson(url: string): () => Promise<any> {
    return () => fetchJson<any>(url);
}
