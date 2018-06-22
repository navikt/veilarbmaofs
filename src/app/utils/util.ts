export function isNullOrUndefined(
    param: string | object | null | undefined
): boolean {
    return param === undefined || param === null;
}
