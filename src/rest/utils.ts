export type FetchInfo = RequestInit & { url: string };

export enum FetchStatus {
    NOT_STARTED = 'NOT_STARTED',
    PENDING = 'PENDING',
    FINISHED = 'FINISHED'
}

export interface FetchState<D> {
    status: FetchStatus;
    error: any;
    data: D;
    httpCode: number;
}

export const isAnyNotStartedOrPending = (...fetches: Array<FetchState<any>>): boolean => {
    return fetches.some(f => isNotStartedOrPending(f));
};

export const hasAnyFailed = (fetches: Array<FetchState<any>>): boolean => {
    return fetches.some(f => hasFailed(f));
};

export const isNotStartedOrPending = (fetch: FetchState<any>): boolean => {
    return fetch.status === FetchStatus.NOT_STARTED || fetch.status === FetchStatus.PENDING;
};

export const hasFinished = (fetch: FetchState<any>): boolean => {
    return fetch.status === FetchStatus.FINISHED;
};

export const hasFailed = (fetch: FetchState<any>): boolean => {
    return fetch.error != null;
};
