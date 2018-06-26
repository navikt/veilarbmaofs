import * as React from 'react';
import Grid from "../../utils/grid";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import {YtelseDataType} from "./ytelsevisning";

function Vedtaksliste(props: Pick<YtelseDataType, 'vedtaksliste'>) {
    if(isNullOrUndefined(props.vedtaksliste)){
        return null;
    }

    const vedtaks = props.vedtaksliste.map((vedtak, index) => (
            <Grid columns={4} gap="1rem" key={`vedtak-${index}`} className="underinformasjon">
                <div>
                    <div>Vedtak:</div>
                    <div>{vedtak.vedtakstype}</div>
                </div>
                <div>
                    <div>Status:</div>
                    <div>{vedtak.status}</div>
                </div>
                <div>
                    <div>Aktivitetsfase:</div>
                    <div>{vedtak.aktivitetsfase}</div>
                </div>
                <div>
                    <div>Vedtaksperiode:</div>
                    <div>Fra Dato: {vedtak.fradato && `${vedtak.fradato.day}-${vedtak.fradato.month}-${vedtak.fradato.year}`}</div>
                    <div>Til Dato: {vedtak.tildato && `${vedtak.tildato.day}-${vedtak.tildato.month}-${vedtak.tildato.year}`}</div>
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