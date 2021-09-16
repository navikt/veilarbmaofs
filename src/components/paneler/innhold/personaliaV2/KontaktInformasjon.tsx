import React from 'react';
import {OrNothing} from "../../../../utils/felles-typer";
import {
    Bostedsadresse,
    Kontaktadresse,
    Oppholdsadresse,
    PersonaliaEpost, PersonaliaTelefon
} from "../../../../rest/datatyper/personaliav2";
import Telefon from "./telefon";
import Epost from "./epost";
import Adresser from "./adresser";

function KontaktInformasjon (props: { telefon: PersonaliaTelefon[], epost: OrNothing<PersonaliaEpost>,
    bostedsadresse: OrNothing<Bostedsadresse>, oppholdsadresse: OrNothing<Oppholdsadresse>, kontaktadresser: Kontaktadresse[] }) {
    const { telefon, epost, bostedsadresse, oppholdsadresse, kontaktadresser } = props;

    return (
        <div className="break-all">
            <Telefon telefon={telefon}  />
            <Epost epost={epost} />
            <Adresser
                bostedsadresse={bostedsadresse}
                oppholdsadresse={oppholdsadresse}
                kontaktadresser={kontaktadresser}
            />
        </div>
    );
}

export default KontaktInformasjon;
