import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import Grid from "../../utils/grid";
import AnsettelseforholdOnsker from "./ansettelseforholdonsker";
import ArbeidstidordningOnsker from "./arbeidstidordningonsker";
import GeografiOnsker from "./geografionsker";
import StillingStorrelseOnsker from "./stillingstorrelseonsker";
import YrkeOnsker from "./yrkeonsker";

function Jobbonsker(props: { data: { jobbonsker: ArenaPerson } }) {
    const {
        geografiJobbonsker,
        yrkeJobbonsker,
        heltidDeltidJobbonsker,
        arbeidstidsordningJobbonsker,
        ansettelsesforholdJobbonsker
    } = props.data.jobbonsker;
    return (
        <>
            <Grid columns={5} gap="0.5rem">
                <GeografiOnsker onsker={geografiJobbonsker}/>
                <YrkeOnsker onsker={yrkeJobbonsker}/>
                <StillingStorrelseOnsker onsker={heltidDeltidJobbonsker}/>
                <ArbeidstidordningOnsker onsker={arbeidstidsordningJobbonsker}/>
                <AnsettelseforholdOnsker onsker={ansettelsesforholdJobbonsker} />
            </Grid>
        </>
    );
}

export default Jobbonsker;