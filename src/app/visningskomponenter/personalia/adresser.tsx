import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {IPersonaliaInfo} from "./personalia";

type Props = Pick<IPersonaliaInfo, 'bostedsadresse'> & Pick<IPersonaliaInfo, 'postAdresse'> & Pick<IPersonaliaInfo, 'midlertidigAdresseNorge'> & Pick<IPersonaliaInfo, 'midlertidigAdresseUtland'>;


function Adresser(props: Props) {
    const { gatenavn, husnummer, husbokstav, postnummer, poststed } = props.bostedsadresse.strukturertAdresse.Gateadresse;
    const { postAdresse, midlertidigAdresseNorge, midlertidigAdresseUtland } = props;

    const SammensattFolkeregistrertAdresse = () => {
        const bokstav = husbokstav ? husbokstav : '';
        const nummer = husnummer ? husnummer : '';
        return (
            <div className="underinformasjon">
                <div>
                    Folkeregistrert postadresse
                </div>
                <div>
                    {`${gatenavn} ${nummer}${bokstav}`}
                </div>
                <div>
                    {`${postnummer} ${poststed}`}
                </div>
            </div>
        );
    };

    const PostAdresse = () => {
        const postAdresseKomponent = (
            <div className="underinformasjon">
                <div>
                    Postadresse
                </div>
                <div>
                    {postAdresse}
                </div>
            </div>
        );
        return postAdresse ? postAdresseKomponent : null;
    };

    const MidlertidigNorge = () => {
        const component = (
            <div className="underinformasjon">
                <div>
                    Midlertidig adresse Norge
                </div>
                <div>
                    {midlertidigAdresseNorge}
                </div>
            </div>
        );
        return midlertidigAdresseNorge ? component : null;
    };

    const MidlertidigUtland = () => {
        const component = (
            <div className="underinformasjon">
                <div>
                    Midlertidig adresse Utland
                </div>
                <div>
                    {midlertidigAdresseUtland}
                </div>
            </div>
        );
        return midlertidigAdresseUtland ? component : null;
    };

    return (
        <Informasjonsbolk {...props}>
            <SammensattFolkeregistrertAdresse />
            <PostAdresse />
            <MidlertidigNorge />
            <MidlertidigUtland />
        </Informasjonsbolk>
    );
}

export default Adresser;

