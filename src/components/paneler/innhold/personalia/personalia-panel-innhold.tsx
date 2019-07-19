import React from 'react';
import Grid from '../../../felles/grid';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import { useAppStore } from '../../../../stores/app-store';
import { kalkulerAlder } from '../../../../utils/date-utils';
import Adresser from './adresser';
import Sivilstand from './sivilstand';
import Partner from './partner';
import Barn from './barn';
import { useFetchPersonalia } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';

const MAX_ALDER_BARN = 21;

const PersonaliaPanelInnhold = () => {
    const {fnr} = useAppStore();
    const personalia = useFetchPersonalia(fnr);

    if (personalia.isLoading) {
        return <Laster/>;
    } else if (personalia.isError) {
        return <Feilmelding/>;
    }

    return personalia.data.map((data) => {
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
        } = data;

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
    }).withDefault(<NoData/>);
};

export default PersonaliaPanelInnhold;
