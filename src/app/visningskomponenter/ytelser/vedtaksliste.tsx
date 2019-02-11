import * as React from 'react';
import { YtelseDataType } from '../../datatyper/ytelse';
import Grid from '../../utils/grid';
import Informasjonsbolk from '../felles-komponenter/informasjonsbolk';
import InformasjonsbolkEnkel from '../felles-komponenter/informasjonsbolk-enkel';
import NormalTekstWrapper from '../felles-komponenter/normaltekstwrapper';
import { formaterDato, safeMap, visEmdashHvisNull } from '../utils';

function Vedtaksliste(props: Pick<YtelseDataType, 'vedtaksliste'>) {
    const vedtakliste = safeMap(props.vedtaksliste, (vedtak, index) => (
        <Grid columns={4} gap="1rem" key={`vedtak-${index}`}>
            <InformasjonsbolkEnkel header="Vedtak" value={visEmdashHvisNull(vedtak.vedtakstype)}/>
            <InformasjonsbolkEnkel header="Vedtakstatus" value={visEmdashHvisNull(vedtak.status)}/>
            <InformasjonsbolkEnkel header="Aktivitetsfase" value={visEmdashHvisNull(vedtak.aktivitetsfase)}/>
            <Informasjonsbolk header="Vedtaksperiode" {...props}>
                <NormalTekstWrapper>{vedtak.fradato && `Fra: ${formaterDato(vedtak.fradato)}`}</NormalTekstWrapper>
                <NormalTekstWrapper>{vedtak.tildato && `Til: ${formaterDato(vedtak.tildato)}`}</NormalTekstWrapper>
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
