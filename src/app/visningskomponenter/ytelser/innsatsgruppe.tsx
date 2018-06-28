import * as React from 'react';
import {YtelseDataType} from "../../datatyper/ytelse";
import {isNullOrUndefined} from "../../utils/util";
import InformasjonsbolkListe from "../felles-komponenter/informasjonsbolk-liste";

function Innsatsgruppe(props: Pick<YtelseDataType, 'oppfolgingskontrakter'>) {
    if (isNullOrUndefined(props.oppfolgingskontrakter)) {
        return null;
    }
    const { oppfolgingskontrakter } = props;

    return <InformasjonsbolkListe header="Innsatsgruppe" list={oppfolgingskontrakter.map(kontrakt => kontrakt.innsatsgrupper)}/>;
}

export default Innsatsgruppe;