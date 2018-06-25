import * as React from 'react';
import { VisningKomponent } from '../../../config';
import Grid from "../../utils/grid";
import {skillUtTipsTilDegFraTekst} from "../../utils/util";
import InformasjonsbolkPunktliste, { InformasjonsbolkPunktlisteMedLenke } from "../felles-komponenter/informasjonsbolk-punktliste";
import SistEndret from "../felles-komponenter/sist-endret";
import Placeholder from './placeholder';

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

interface Aktivitet {
    tittel: string;
    innhold: string;
}

interface Raad {
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
    const raadListe = raad.map(rad => {
        const ingressOgTips: string[] = skillUtTipsTilDegFraTekst(rad.raadIngress);
        const tips = ingressOgTips[1];
        const tekst = ingressOgTips[0];
        return { tips, tekst };
    });

    return (
        <>
            <SistEndret sistEndret={besvarelseDato} />
            <Grid columns={1} gap="0.5rem">
                <InformasjonsbolkPunktliste header="Dette gjør du bra" list={kulepunktListe} />
                <InformasjonsbolkPunktlisteMedLenke header="Dette kan du gjøre bedre" list={raadListe}/>
            </Grid>
        </>
    );
}

(Jobbsokerkompetanse as VisningKomponent).placeholder = Placeholder;

export default Jobbsokerkompetanse;