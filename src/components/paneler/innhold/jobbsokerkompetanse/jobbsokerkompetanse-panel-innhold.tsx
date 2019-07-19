import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import SistEndret from '../../../felles/sist-endret';
import Grid from '../../../felles/grid';
import InformasjonsbolkPunktliste from '../../../felles/informasjonsbolk-punktliste';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { safeMap } from '../../../../utils';
import { RaadVisning } from './raad-visning';
import { useFetchJobbsokerkompetanse } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';

const JobbsokerkompetansePanelInnhold = () => {
    const {fnr} = useAppStore();
    const jobbsokerkompetanse = useFetchJobbsokerkompetanse(fnr);

    if (jobbsokerkompetanse.isLoading) {
        return <Laster/>;
    } else if (jobbsokerkompetanse.isError) {
        return <Feilmelding/>;
    }

    return jobbsokerkompetanse.data.map(jobbsokerkompetanseData => {

        const { besvarelseDato, kulepunkter, raad } = jobbsokerkompetanseData;
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
                    <InformasjonsbolkPunktliste
                        header="Dette gjør du bra"
                        list={kulepunktListe}
                        className="jobbsokerkompetanse__punktliste"
                    />
                    <Informasjonsbolk
                        header="Dette kan du gjøre bedre"
                        className="jobbsokerkompetanse__raadliste"
                    >
                        <ul>
                            {raadliste}
                        </ul>
                    </Informasjonsbolk>
                </Grid>
            </>
        );
    }).withDefault(<NoData/>);
};

export default JobbsokerkompetansePanelInnhold;
