import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {IPersonaliaBostedsadresse, IPersonaliaInfo} from "./personalia";

type Props = Pick<IPersonaliaInfo, 'bostedsadresse'> & Pick<IPersonaliaInfo, 'postAdresse'> & Pick<IPersonaliaInfo, 'midlertidigAdresseNorge'> & Pick<IPersonaliaInfo, 'midlertidigAdresseUtland'>;


function Adresser(props: Props) {
    const { postAdresse, midlertidigAdresseNorge, midlertidigAdresseUtland } = props;

    function AdresseVisning(prop: IPersonaliaBostedsadresse) {
        const { gatenavn, husnummer, husbokstav, postnummer, poststed } = prop.strukturertAdresse.Gateadresse;
        const nummer = husnummer ? husnummer : '';
        const bokstav = husbokstav ? husbokstav : '';

        return (
        <>
            <div>
                {`${gatenavn} ${nummer}${bokstav}`}
            </div>
            <div>
                {`${postnummer} ${poststed}`}
            </div>
        </>);
    }

    const SammensattFolkeregistrertAdresse = () => {
        if (isNullOrUndefined(props.bostedsadresse)) {
            return null;
        }

        return (
            <div className="underinformasjon">
                <div>
                    Folkeregistrert postadresse
                </div>
                <AdresseVisning strukturertAdresse={props.bostedsadresse.strukturertAdresse}/>
            </div>
        );
    };

    const PostAdresse = () => {
        if (isNullOrUndefined(postAdresse)) {
            return null;
        }

        const { adresselinje1, adresselinje2, adresselinje3, adresselinje4, landkode } = postAdresse.ustrukturertAdresse;

        return (
            <div className="underinformasjon">
                <div>
                    Postadresse
                </div>
                <div>
                    {adresselinje1}
                </div>
                <div>
                    {adresselinje2}
                </div>
                <div>
                    {adresselinje3}
                </div>
                <div>
                    {adresselinje4}
                </div>
                <div>
                    {landkode}
                </div>
            </div>
        );
    };

    const MidlertidigNorge = () => {
        if (isNullOrUndefined(midlertidigAdresseNorge)) {
            return null;
        }

        return (
            <div className="underinformasjon">
                <div>
                    Midlertidig adresse Norge
                </div>
                <AdresseVisning strukturertAdresse={midlertidigAdresseNorge.strukturertAdresse}/>
            </div>
        );
    };

    const MidlertidigUtland = () => {
        if (isNullOrUndefined(midlertidigAdresseUtland)) {
            return null;
        }

      return (
            <div className="underinformasjon">
                <div>
                    Midlertidig adresse Norge
                </div>
                <AdresseVisning strukturertAdresse={midlertidigAdresseUtland.strukturertAdresse}/>
            </div>
        );
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

