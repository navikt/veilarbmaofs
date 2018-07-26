import {OrNothing, StringOrNothing} from "../visningskomponenter/felles-typer";

export interface OppfolgingskontrakterType {
    innsatsgrupper: StringOrNothing[];
    status: string;
}

export interface DatoType {
    year: string,
    month: string,
    day: string
}

export interface VedtakType {
    aktivitetsfase: StringOrNothing;
    vedtakstype: StringOrNothing;
    status: StringOrNothing;
    fradato: DatoType;
    tildato?: OrNothing<DatoType>;
}

export interface YtelseType {
    rettighetsperiode: StringOrNothing;
}

export interface YtelseDataType {
    oppfolgingskontrakter: OppfolgingskontrakterType[];
    vedtaksliste: VedtakType[];
    // ytelser: YtelseType[];
}
