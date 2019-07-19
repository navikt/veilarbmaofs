import { UseFetchHook } from '@nutgaard/use-fetch';

export const getData = <T extends any>(fetch: UseFetchHook<T>): T => {
    return fetch.data.getOrElse({} as T);
};
