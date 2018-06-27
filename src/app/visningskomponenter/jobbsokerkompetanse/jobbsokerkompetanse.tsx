import * as React from 'react';
import { VisningKomponent } from '../../../config';
import Grid from "../../utils/grid";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import InformasjonsbolkPunktliste from "../felles-komponenter/informasjonsbolk-punktliste";
import SistEndret from "../felles-komponenter/sist-endret";
import Placeholder from './placeholder';
import { RaadVisning } from "./raad-visning";

interface SvarAlternativ {
    svarAlternativKey: string;
    svarAlternativ: string;
}

interface Besvarelse {
    sporsmal: string;
    sporsmalKey: string;
    svarAlternativer: SvarAlternativ[];
    tips?: string;
    tipsKey?: string;
}

export interface Aktivitet {
    tittel: string;
    innhold: string;
}

export interface Raad {
    raadKey: string;
    raadTittel: string;
    raadIngress: string;
    raadAktiviteter: Aktivitet[];
}

interface Kulepunkt {
    kulepunktKey: string;
    kulepunktPrioritet: number;
    kulepunkt: string;
}

export interface KartleggingData {
    besvarelse: Besvarelse[];
    besvarelseDato: string;
    kulepunkter: Kulepunkt[];
    oppsummering: string;
    oppsummeringKey: string;
    raad: Raad[];
    underOppfolging: boolean;

}

function Jobbsokerkompetanse(props: { data: { jobbsokerkompetanse: KartleggingData }}) {
    const { besvarelseDato, kulepunkter, raad } = props.data.jobbsokerkompetanse;

    const kulepunktListe = kulepunkter.map(punkt => punkt.kulepunkt);
    const raadliste = raad.map((rad, index) => (
        <li key={index}>
            <RaadVisning raad={rad} />
        </li>)
    );

    return (
        <>
            <SistEndret sistEndret={besvarelseDato} />
            <Grid columns={1} gap="0rem">
                <InformasjonsbolkPunktliste header="Dette gjør du bra" list={kulepunktListe} className="jobbsokerkompetanse__punktliste"/>
                <Informasjonsbolk header="Dette kan du gjøre bedre" className="jobbsokerkompetanse__raadliste">
                    <ul>
                        {raadliste}
                    </ul>
                </Informasjonsbolk>
            </Grid>
        </>
    );
}

(Jobbsokerkompetanse as VisningKomponent).placeholder = Placeholder;

export default Jobbsokerkompetanse;