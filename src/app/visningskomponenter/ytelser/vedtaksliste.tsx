import Normaltekst from "nav-frontend-typografi/lib/normaltekst";
import * as React from 'react';
import {YtelseDataType} from "../../datatyper/ytelse";
import EMDASH from "../../utils/emdash.js";
import Grid from "../../utils/grid";
import {isNullOrUndefined} from "../../utils/util";
import {formaterDato} from "../felles-komponenter/dato";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import InformasjonsbolkEnkel from "../felles-komponenter/informasjonsbolk-enkel";
import {StringOrNull} from "../felles-typer";

function Vedtaksliste(props: Pick<YtelseDataType, 'vedtaksliste'>) {
    if(isNullOrUndefined(props.vedtaksliste)){
        return null;
    }

    const visEmdashHvisNull = (verdi: StringOrNull) => {
          if(verdi){
              return verdi;
          }
          return EMDASH;
    };

    const vedtakliste = props.vedtaksliste.map((vedtak, index) => (
        <Grid columns={4} gap="1rem" key={`vedtak-${index}`}>
            <InformasjonsbolkEnkel header="Vedtak" value={visEmdashHvisNull(vedtak.vedtakstype)} />
            <InformasjonsbolkEnkel header="Vedtakstatus" value={visEmdashHvisNull(vedtak.status)} />
            <InformasjonsbolkEnkel header="Aktivitetsfase" value={visEmdashHvisNull(vedtak.aktivitetsfase)} />
            <Informasjonsbolk header="Vedtaksperiode" {...props}>
                <Normaltekst>{vedtak.fradato && `Fra: ${formaterDato(vedtak.fradato)}`}</Normaltekst>
                <Normaltekst>{vedtak.tildato && `Til: ${formaterDato(vedtak.tildato)}`}</Normaltekst>
            </Informasjonsbolk>
        </Grid>
    ));

    return (
        <div {...props}>
            {vedtakliste}
        </div>
    );
}

export default Vedtaksliste;