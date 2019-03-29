export type OrNothing<T> = T | undefined | null;

export type StringOrNothing = OrNothing<string>;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
