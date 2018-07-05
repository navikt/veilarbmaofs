import {StringOrNothing} from "../visningskomponenter/felles-typer";

export interface OppfolgingEnhet {
    navn: StringOrNothing;
    enhetId: StringOrNothing;
}

export interface OppfolgingData {
    oppfolgingsenhet: OppfolgingEnhet,
    veilederId: StringOrNothing;
}