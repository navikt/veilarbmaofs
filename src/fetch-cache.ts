function createCacheKey(input: RequestInfo, init?: RequestInit): string {
    return input as string;
}

interface ICache {
    [key: string]: Promise<Response>
}
const cache: ICache = {};

export default function fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
   const key: string = createCacheKey(input, init);
   if (cache[key]) {
       return cache[key];
   }
   const resp: Promise<Response> = window.fetch(input, init);

   cache[key] = resp;

   return resp;
}