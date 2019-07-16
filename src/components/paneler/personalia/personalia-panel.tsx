import React, { useEffect } from 'react';
import Panel from '../panel';
import Grid from '../../felles/grid';
import InformasjonsbolkEnkel from '../../felles/informasjonsbolk-enkel';
import { Laster } from '../../felles/laster';
import { Feilmelding } from '../../felles/feilmelding';
import { useFetchStoreContext } from '../../../stores/fetch-store';
import { useAppStoreContext } from '../../../stores/app-store';
import { hasData } from '../../../rest/utils';
import { kalkulerAlder } from '../../../utils/date-utils';
import Adresser from './adresser';
import Sivilstand from './sivilstand';
import Partner from './partner';
import Barn from './barn';

const MAX_ALDER_BARN = 21;

const PersonaliaPanelInnhold = () => {
    const {personalia} = useFetchStoreContext();
    const {fnr} = useAppStoreContext();

    useEffect(() => {
        if (!hasData(personalia)) {
            personalia.fetch({fnr});
        }
    }, []);

    return (
        <Laster avhengigheter={personalia}>
            <Feilmelding avhengigheter={personalia}>
                {() => {
                    const {
                        bostedsadresse,
                        postAdresse,
                        midlertidigAdresseNorge,
                        midlertidigAdresseUtland,
                        telefon,
                        epost,
                        kontonummer,
                        statsborgerskap,
                        sivilstand,
                        partner,
                        barn
                    } = personalia.data;

                    const filtrertBarneListe = barn.filter((enkeltBarn) =>
                        kalkulerAlder(new Date(enkeltBarn.fodselsdato)) < MAX_ALDER_BARN);

                    return (
                        <Grid columns={5} gap="0.5rem">
                            <Adresser
                                bostedsadresse={bostedsadresse}
                                postAdresse={postAdresse}
                                midlertidigAdresseNorge={midlertidigAdresseNorge}
                                midlertidigAdresseUtland={midlertidigAdresseUtland}
                            />
                            <InformasjonsbolkEnkel header="Telefon" value={telefon}/>
                            <InformasjonsbolkEnkel header="Epost" value={epost} className="break-all"/>
                            <InformasjonsbolkEnkel header="Kontonummer" value={kontonummer}/>
                            <InformasjonsbolkEnkel header="Statsborgerskap" value={statsborgerskap}/>
                            <Sivilstand sivilstand={sivilstand}/>
                            <Partner partner={partner}/>
                            <Barn barn={filtrertBarneListe}/>
                        </Grid>
                    );
                }}
            </Feilmelding>
        </Laster>
    );
};

const PersonaliaPanel = () => {
    return (
        <Panel name="personalia" tittel="Personalia">
            <PersonaliaPanelInnhold/>
        </Panel>
    );
};

export default PersonaliaPanel;
