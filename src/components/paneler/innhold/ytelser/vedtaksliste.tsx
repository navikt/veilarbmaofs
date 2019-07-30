import React from 'react';
import { YtelseData } from '../../../../rest/datatyper/ytelse';
import Grid from '../../../felles/grid';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import { Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../../../utils/emdash';
import { formaterDato, safeMap, visEmdashHvisNull } from '../../../../utils';

function Vedtaksliste(props: Pick<YtelseData, 'vedtaksliste'>) {
    const vedtakliste = safeMap(props.vedtaksliste, (vedtak, index) => (
        <Grid columns={4} gap="1rem" key={`vedtak-${index}`}>
            <InformasjonsbolkEnkel header="Vedtak" value={visEmdashHvisNull(vedtak.vedtakstype)}/>
            <InformasjonsbolkEnkel header="Vedtakstatus" value={visEmdashHvisNull(vedtak.status)}/>
            <InformasjonsbolkEnkel header="Aktivitetsfase" value={visEmdashHvisNull(vedtak.aktivitetsfase)}/>
            <Informasjonsbolk header="Vedtaksperiode" {...props}>
                <Normaltekst>{vedtak.fradato ? `Fra: ${formaterDato(vedtak.fradato)}` : EMDASH}</Normaltekst>
                <Normaltekst>{vedtak.tildato ? `Til: ${formaterDato(vedtak.tildato)}` : EMDASH}</Normaltekst>
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
