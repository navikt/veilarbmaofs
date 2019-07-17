import { useState } from 'react';
import { FetchInfo, FetchState, FetchStatus } from './utils';

export interface Fetch<D = any, FP = any> extends FetchState<D> {
    fetch: (fetchParams: FP) => void;
    reset: () => void;
}

const createInitialFetchState = (): FetchState<any> => {
    return {
        status: FetchStatus.NOT_STARTED,
        error: null,
        data: null as any,
        httpCode: -1,
    };
};

const createPendingFetchState = (): FetchState<any> => ({
    status: FetchStatus.PENDING,
    error: null,
    data: null as any,
    httpCode: -1
});

const createFinishedFetchState = <D = {}>(data: D | null, error: any | null, httpCode: number): FetchState<D> => ({
    status: FetchStatus.FINISHED,
    error,
    data: data as D,
    httpCode,
});

const useFetch = <D = {}, FP = any>(createFetchInfo: (fetchParams: FP) => FetchInfo): Fetch<D, FP> => {
    const [fetchState, setFetchState] = useState<FetchState<D>>(createInitialFetchState());

    const apiFetch = (fetchParams: FP) => {
        const fetchInfo = createFetchInfo(fetchParams);
        const { url, ...restInfo } = fetchInfo;

        setFetchState(createPendingFetchState());

        fetch(url, restInfo)
            .then(async (res) => {

                const httpCode = res.status;

                if (httpCode === 200) {
                    try {
                        const data = await res.json();
                        setFetchState(createFinishedFetchState(data, null, httpCode));
                    } catch (error) {
                        setFetchState(createFinishedFetchState(null as any, error, httpCode));
                    }
                } else {
                    setFetchState(createFinishedFetchState(null as any, null, httpCode));
                }

            })
            .catch(error => {
               setFetchState(createFinishedFetchState(null as any, error, -1));
            });
    };

    const reset = () => {
        setFetchState(createInitialFetchState());
    };

    return { ...fetchState, fetch: apiFetch, reset };
};

export default useFetch;
