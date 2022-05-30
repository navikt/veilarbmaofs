import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';

export enum Status {
	NOT_STARTED = 'NOT_STARTED',
	PENDING = 'PENDING',
	RESOLVED = 'RESOLVED',
	REJECTED = 'REJECTED'
}

type PromiseState<R, E> =
	| NotStartedPromiseState
	| PendingPromiseState
	| ResolvedPromiseState<R>
	| RejectedPromiseState<E>;

interface NotStartedPromiseState {
	result: undefined;
	error: undefined;
	status: Status.NOT_STARTED;
}

interface PendingPromiseState {
	result: undefined;
	error: undefined;
	status: Status.PENDING;
}

interface ResolvedPromiseState<R> {
	result: R;
	error: undefined;
	status: Status.RESOLVED;
}

interface RejectedPromiseState<E> {
	result: undefined;
	error: E;
	status: Status.REJECTED;
}

const defaultState: NotStartedPromiseState = {
	result: undefined,
	error: undefined,
	status: Status.NOT_STARTED
};

type UsePromise<R, E extends Error> = PromiseState<R, E> & {
	setPromise: Dispatch<SetStateAction<Promise<R> | undefined>>;
};

export const usePromise = <R>(func: () => Promise<R>, dependencies?: any[]): UsePromise<R, Error> => {
	return usePromiseInternal<R, Error>(func, dependencies);
};

export const useAxiosPromise = <R>(
	func: () => AxiosPromise<R>,
	dependencies?: any[]
): UsePromise<AxiosResponse<R>, AxiosError> => {
	return usePromiseInternal<AxiosResponse<R>, AxiosError>(func, dependencies);
};

const usePromiseInternal = <R, E extends Error>(func: () => Promise<R>, dependencies?: any[]): UsePromise<R, E> => {
	const [promise, setPromise] = useState<Promise<R>>();
	const [promiseState, setPromiseState] = useState<PromiseState<R, E>>(defaultState);

	useEffect(() => {
		setPromiseState({ status: Status.PENDING, error: undefined, result: undefined });
		setPromise(func());
		// eslint-disable-next-line
	}, dependencies || []);

	// @ts-ignore
	useEffect(() => {
		if (promise) {
			let canceled = false;

			setPromiseState({ status: Status.PENDING, result: undefined, error: undefined });

			promise
				.then(res => {
					if (canceled) return;

					setPromiseState({ status: Status.RESOLVED, result: res, error: undefined });
				})

				.catch(err => {
					if (canceled) return;

					setPromiseState({ status: Status.REJECTED, result: undefined, error: err });
				});

			return () => {
				canceled = true;
			};
		}
	}, [promise]);
	return {
		...promiseState,
		setPromise
	};
};

export const isNotStartedOrPending = <R, E>(
	state: PromiseState<R, E>
): state is NotStartedPromiseState | PendingPromiseState => {
	return state.status === Status.NOT_STARTED || state.status === Status.PENDING;
};

export const isPending = <R, E>(state: PromiseState<R, E>): state is PendingPromiseState => {
	return state.status === Status.PENDING;
};

export const isResolved = <R, E>(state: PromiseState<R, E>): state is ResolvedPromiseState<R> => {
	return state.status === Status.RESOLVED;
};

export const isRejected = <R, E>(state: PromiseState<R, E>): state is RejectedPromiseState<E> => {
	return state.status === Status.REJECTED;
};
