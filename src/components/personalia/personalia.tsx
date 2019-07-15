import * as React from 'react';
import { PersonaliaInfo } from '../../rest/datatyper/personalia';
import { kalkulerAlder } from '../../utils/date-utils';
import Grid from '../../utils/grid';
import InformasjonsbolkEnkel from '../felles-komponenter/informasjonsbolk-enkel';
import Adresser from './adresser';
import Barn from './barn';
import Partner from './partner';
import Sivilstand from './sivilstand';

const MAX_ALDER_BARN = 21;

function Personalia(props: { data: { personalia: PersonaliaInfo } }) {
    const { bostedsadresse,
        postAdresse,
        midlertidigAdresseNorge,
        midlertidigAdresseUtland,
        telefon,
        epost,
        kontonummer,
        statsborgerskap,
        sivilstand,
        partner,
        barn } = props.data.personalia;

    const filtrertBarneListe = barn.filter((enkeltBarn) =>
        kalkulerAlder(new Date(enkeltBarn.fodselsdato)) < MAX_ALDER_BARN);

    return (
        <>
            <Grid columns={5} gap="0.5rem">
                <Adresser
                    bostedsadresse={bostedsadresse}
                    postAdresse={postAdresse}
                    midlertidigAdresseNorge={midlertidigAdresseNorge}
                    midlertidigAdresseUtland={midlertidigAdresseUtland}
                />
                <InformasjonsbolkEnkel header="Telefon" value={telefon} />
                <InformasjonsbolkEnkel header="Epost" value={epost} className="break-all" />
                <InformasjonsbolkEnkel header="Kontonummer" value={kontonummer} />
                <InformasjonsbolkEnkel header="Statsborgerskap" value={statsborgerskap} />
                <Sivilstand sivilstand={sivilstand} />
                <Partner partner={partner} />
                <Barn barn={filtrertBarneListe} />
            </Grid>
        </>
    );
}

export default Personalia;
