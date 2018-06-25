function createCacheKey(input: RequestInfo, init?: RequestInit): string {
    return input as string;
}

interface ICache {
    [key: string]: Promise<Response>;
}
const cache: ICache = {};

export default function fetch(
    input: RequestInfo,
    init?: RequestInit
): Promise<Response> {
    const key: string = createCacheKey(input, init);
    if (cache[key]) {
        return cache[key].then(response => response.clone());
    }
    const resp: Promise<Response> = window.fetch(input, init);

    cache[key] = resp;

    resp.then(
        response => {
            if (!response.ok) {
                delete cache[key];
            }
        },
        error => {
            delete cache[key];
        }
    ).catch(error => {
        delete cache[key];
    });

    return resp.then(response => response.clone());
}
