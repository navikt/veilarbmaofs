import React, { useEffect } from 'react';
import Panel from '../panel';
import { useFetchStoreContext } from '../../../stores/fetch-store';
import { useAppStoreContext } from '../../../stores/app-store';
import { hasData, isNotStarted } from '../../../rest/utils';
import { Laster } from '../../felles/laster';
import { Feilmelding } from '../../felles/feilmelding';
import SistEndret from '../../felles/sist-endret';
import Grid from '../../felles/grid';
import InformasjonsbolkPunktliste from '../../felles/informasjonsbolk-punktliste';
import Informasjonsbolk from '../../felles/informasjonsbolk';
import { safeMap } from '../../../utils';
import { RaadVisning } from './raad-visning';
import { Normaltekst } from 'nav-frontend-typografi';

const JobbsokerkompetansePanelInnhold = () => {
    const {jobbsokerkompetanse} = useFetchStoreContext();
    const {fnr} = useAppStoreContext();

    useEffect(() => {
        if (isNotStarted(jobbsokerkompetanse)) {
            jobbsokerkompetanse.fetch({fnr});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Laster avhengigheter={jobbsokerkompetanse}>
            <Feilmelding avhengigheter={jobbsokerkompetanse}>
                {() => {

                    if (!hasData(jobbsokerkompetanse)) {
                        return <Normaltekst>Ingen data tilgjengelig</Normaltekst>;
                    }

                    const { besvarelseDato, kulepunkter, raad } = jobbsokerkompetanse.data;
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
                }}
            </Feilmelding>
        </Laster>
    );
};

const JobbsokerkompetansePanel = () => {
    return (
        <Panel name="jobbsokerkompetanse" tittel="Jobbsøkerkompetanse">
            <JobbsokerkompetansePanelInnhold/>
        </Panel>
    );
};

export default JobbsokerkompetansePanel;
