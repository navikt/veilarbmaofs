import * as React from 'react';
import { VisningKomponent } from '../../../config';
import {PersonaliaInfo} from "../../datatyper/personalia";
import Grid from "../../utils/grid";
import InformasjonsbolkEnkel from '../felles-komponenter/informasjonsbolk-enkel';
import Adresser from "./adresser";
import Barn from "./barn";
import Partner from "./partner";
import Placeholder from './placeholder';
import Sivilstand from "./sivilstand";

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
                <InformasjonsbolkEnkel header="Epost" value={epost} />
                <InformasjonsbolkEnkel header="Kontonummer" value={kontonummer} />
                <InformasjonsbolkEnkel header="Statsborgerskap" value={statsborgerskap} />
                <Sivilstand sivilstand={sivilstand} />
                <Partner partner={partner} />
                <Barn barn={barn} />
            </Grid>
        </>
    );
}

(Personalia as VisningKomponent).placeholder  = Placeholder;

export default Personalia;