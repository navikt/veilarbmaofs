import * as React from 'react';
import { VisningKomponent } from '../../../config';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Grid from "../../utils/grid";
import InformasjonsbolkListe from '../felles-komponenter/informasjonsbolk-liste';

function Jobbonsker(props: { data: { jobbonsker: ArenaPerson } }) {
    const {
        geografiJobbonsker,
        yrkeJobbonsker,
        heltidDeltidJobbonsker,
        arbeidstidsordningJobbonsker,
        ansettelsesforholdJobbonsker
    } = props.data.jobbonsker;



    const geografi = geografiJobbonsker.map((onske) => onske.geografiKodeTekst);
    const styrkBeskrivelse = yrkeJobbonsker.map((onske) => onske.styrkBeskrivelse);
    const heltidDeltid = heltidDeltidJobbonsker.map((onske) => onske.heltidDeltidKodeTekst);
    const arbeidstidsordning = arbeidstidsordningJobbonsker.map((onske) => onske.arbeidstidsordningKodeTekst);
    const ansettelseforhold = ansettelsesforholdJobbonsker.map((onske) => onske.ansettelsesforholdKodeTekst);

    return (
        <>
            <Grid columns={5} gap="0.5rem">
                <InformasjonsbolkListe header="Geografi" list={geografi}/>
                <InformasjonsbolkListe header="Yrke" list={styrkBeskrivelse}/>
                <InformasjonsbolkListe header="Heltid/Deltid" list={heltidDeltid}/>
                <InformasjonsbolkListe header="Arbeidstidordning" list={arbeidstidsordning}/>
                <InformasjonsbolkListe header="Ansettelseforhold" list={ansettelseforhold}/>
            </Grid>
        </>
    );
}

export default Jobbonsker as VisningKomponent;