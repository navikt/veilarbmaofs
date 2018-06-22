import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import InformasjonsbolkListe from "../felles-komponenter/informasjonsbolk-liste";
import {YtelseDataType} from "./ytelsevisning";

function Innsatsgruppe(props: Pick<YtelseDataType, 'oppfolgingskontrakter'>) {
    if (isNullOrUndefined(props.oppfolgingskontrakter)) {
        return null;
    }
    const { oppfolgingskontrakter } = props;

    return <InformasjonsbolkListe header="Innsatsgruppe:" list={oppfolgingskontrakter.map(kontrakt => kontrakt.innsatsgrupper)}/>;
}

export default Innsatsgruppe;