function createCacheKey(input: RequestInfo, init?: RequestInit): string {
    return input as string;
}

function logTimeSince(key: string, startTime: Date) {
    const end = new Date();
    return () => (window as any).frontendlogger.event('maofs.responseTime',
        {'key' : key, 'time': end.getTime() - startTime.getTime()}, {});
}

interface ICache {
    [key: string]: Promise<Response>
}
const cache: ICache = {};

export default function fetch(key: string, input: RequestInfo, init?: RequestInit): Promise<Response> {
   const cacheKey: string = createCacheKey(input, init);
   if (cache[cacheKey]) {
       return cache[cacheKey]
           .then((response) => response.clone());
   }
   const resp: Promise<Response> = window.fetch(input, init);

   cache[cacheKey] = resp;

   resp
       .then((response) => {
           if (!response.ok) {
               delete cache[cacheKey];
           }
       }, (error) => {
           delete cache[cacheKey];
       })
       .catch((error) => {
           delete cache[cacheKey];
       });

   const start = new Date();
   return resp
       .then((response) => {
           logTimeSince(key, start);
           return response.clone()
       });
}