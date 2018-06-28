import {StringOrNull} from "../visningskomponenter/felles-typer";

export interface OppfolgingEnhet {
    navn: StringOrNull;
    enhetId: StringOrNull;
}

export interface OppfolgingData {
    oppfolgingsenhet: OppfolgingEnhet,
    veilederId: StringOrNull;
}