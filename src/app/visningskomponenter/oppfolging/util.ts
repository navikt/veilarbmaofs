import {StringOrNull} from "../felles-typer";

export function getEnhetTekst(enhet: {enhetId: StringOrNull, navn: StringOrNull}): string {
    return `${enhet.enhetId} ${enhet.navn}`
}