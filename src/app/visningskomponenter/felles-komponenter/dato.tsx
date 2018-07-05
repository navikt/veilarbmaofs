import * as React from 'react';
import { isNullOrUndefined } from '../../utils/util';

import { Normaltekst } from 'nav-frontend-typografi';
import { StringOrNothing } from '../felles-typer';

export interface DatoType {
    year: string,
    month: string,
    day: string
}

function Dato(props: { dato: StringOrNothing }) {
    if (isNullOrUndefined(props.dato)) {
        return null;
    }

    return (
        <Normaltekst>
            Fra: {new Date(props.dato!).toLocaleDateString()}
        </Normaltekst>
    );
}

export function formaterDato( datoObjekt: DatoType ) {
    if (isNullOrUndefined(datoObjekt)) {
        return null;
    }

    const formatLokalDatoStreng = (dato: DatoType) => {
        const lokalDato = new Date(Date.UTC(Number(dato.year), Number(dato.month), Number(dato.day)));
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const lokalDatoStreng = lokalDato.toLocaleDateString('no-NO', options);  // Resultat dato format: dd. mon. yyyy
        return lokalDatoStreng.replace(/\.\s/g,'.');  // erstattes '. ' med '.' så får vi resultat dato som: dd.mon.yyyy
    };

    return (
        formatLokalDatoStreng(datoObjekt)
    );
}

export default Dato;