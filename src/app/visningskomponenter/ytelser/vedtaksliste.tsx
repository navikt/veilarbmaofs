import * as React from 'react';
import EMDASH from "../../utils/emdash.js";
import Grid from "../../utils/grid";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {StringOrNull} from "../felles-typer";
import {YtelseDataType} from "./ytelsevisning";

function Vedtaksliste(props: Pick<YtelseDataType, 'vedtaksliste'>) {
    if(isNullOrUndefined(props.vedtaksliste)){
        return null;
    }

    const tekstverdi = (verdi: StringOrNull) => {
          if(verdi){
              return verdi;
          }
          return EMDASH;
    };

    const vedtaks = props.vedtaksliste.map((vedtak, index) => (
            <Grid columns={4} gap="1rem" key={`vedtak-${index}`} className="underinformasjon">
                <div>
                    <div>Vedtak:</div>
                    <div>{tekstverdi(vedtak.vedtakstype)}</div>
                </div>
                <div>
                    <div>Status:</div>
                    <div>{tekstverdi(vedtak.status)}</div>
                </div>
                <div>
                    <div>Aktivitetsfase:</div>
                    <div>{tekstverdi(vedtak.aktivitetsfase)}</div>
                </div>
                <div>
                    <div>Vedtaksperiode:</div>
                    <div>{vedtak.fradato && `Fra Dato: ${vedtak.fradato.day}-${vedtak.fradato.month}-${vedtak.fradato.year}`}</div>
                    <div>{vedtak.tildato && `Til Dato: ${vedtak.tildato.day}-${vedtak.tildato.month}-${vedtak.tildato.year}`}</div>
                </div>
            </Grid>
    ));

    return (
        <Informasjonsbolk header="Aktive vedtak" {...props}>
            {vedtaks}
        </Informasjonsbolk>
    );
}

export default Vedtaksliste;