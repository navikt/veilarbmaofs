import React from 'react';
import { KartleggingData } from '../../../rest/datatyper/kartlegging';
import Grid from '../../grid';
import Informasjonsbolk from '../../felles/informasjonsbolk';
import InformasjonsbolkPunktliste from '../../felles/informasjonsbolk-punktliste';
import SistEndret from '../../felles/sist-endret';
import { safeMap } from '../../utils';
import { RaadVisning } from './raad-visning';

function Jobbsokerkompetanse(props: { data: { jobbsokerkompetanse: KartleggingData }}) {
    const { besvarelseDato, kulepunkter, raad } = props.data.jobbsokerkompetanse;

    const kulepunktListe = kulepunkter.map((punkt) => punkt.kulepunkt);
    const raadliste = safeMap(raad,(rad, index) => (
        <li key={index}>
            <RaadVisning raad={rad} />
        </li>)
    );

    return (
        <>
            <SistEndret sistEndret={besvarelseDato} onlyYearAndMonth={false} />
            <Grid columns={1} gap="0rem">
                <InformasjonsbolkPunktliste header="Dette gjør du bra" list={kulepunktListe} className="jobbsokerkompetanse__punktliste"/>
                <Informasjonsbolk header="Dette kan du gjøre bedre" className="jobbsokerkompetanse__raadliste">
                    <ul>
                        {raadliste}
                    </ul>
                </Informasjonsbolk>
            </Grid>
        </>
    );
}

export default Jobbsokerkompetanse;
