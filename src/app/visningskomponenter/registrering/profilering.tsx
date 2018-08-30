    import { Ingress, Normaltekst} from "nav-frontend-typografi";
    import * as React from "react";
    import {Profilering} from "../../datatyper/registreringsData";
    import FloatGrid from "../../utils/float-grid";
    import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";

    interface Props {
        profilering?: Profilering;
    }

    export function Profilering(props: Props) {
        if (!props.profilering) {
            return null;
        }

        const header = "Brukeren har vært sammenhengende i jobb minst 6 av de siste 12 måneder";
        return (
            <>
                <Ingress>Hentet fra Aa-registret</Ingress>
                <FloatGrid columns={2} gap={8}>
                        <Informasjonsbolk header={header} headerTypo="element">
                            <Normaltekst className="underinformasjon">{props.profilering.jobbetSammenhengendeSeksAvTolvSisteManeder ? "Ja" : "Nei"} </Normaltekst>
                        </Informasjonsbolk>
                </FloatGrid>
            </>

        )
    }
