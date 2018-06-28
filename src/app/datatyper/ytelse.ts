import {StringOrNull} from "../visningskomponenter/felles-typer";

export interface OppfolgingskontrakterType {
    innsatsgrupper: StringOrNull[];
    status: string;
}

export interface VedtakType {
    aktivitetsfase: StringOrNull;
    vedtakstype: StringOrNull;
    status: StringOrNull;
    fradato: {
        year: "string",
        month: "string",
        day: "string"
    };
    tildato: {
        year: "string",
        month: "string",
        day: "string"
    };
}

export interface YtelseType {
    rettighetsperiode: StringOrNull;
}

export interface YtelseDataType {
    oppfolgingskontrakter: OppfolgingskontrakterType[];
    vedtaksliste: VedtakType[];
    ytelser: YtelseType[];
}
