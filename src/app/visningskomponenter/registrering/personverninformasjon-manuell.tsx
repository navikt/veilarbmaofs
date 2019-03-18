import React from 'react';
import { Normaltekst, Sidetittel, Systemtittel, Undertittel } from 'nav-frontend-typografi';

export function PersonverninformasjonManuell() {
    return (
        <div className="personverninformasjon-modal__innhold">
            <Sidetittel>Ordinaer manuell registrering</Sidetittel>
            <ul>
                <li>får du hjelp til å komme i jobb</li>
                <li>vil arbeidsgivere finne deg i CV-basen vår</li>
                <li>kan du bruke vår nettjenester for å komme raskere i jobb</li>
                <li>får du din egen aktivitetsplan</li>
            </ul>
            <Undertittel>Rettigheter</Undertittel>
            <Normaltekst>
                {`NAV skal vurdere hva slags oppfølging du trenger for å komme i jobb. Dette er en rettighet du har etter NAV-loven § 14a. Du får et vedtak med vår vurdering av hva slags oppfplging du trenger.`}
            </Normaltekst>
            <Undertittel>Plikter</Undertittel>
                <ul>
                    <li>Sende meldekort hver 14. dag. Det er et krav for å få oppfølging og økonomisk støtte.</li>
                    <li>Være aktiv arbeidssøker, søke på ledige stillinger og holde CV-en oppdatert.</li>
                </ul>
                <Systemtittel>Hva skjer når du registrerer deg?</Systemtittel>
                <Normaltekst>
                    Når du registrerer deg som arbeidssøker vurderer vi hva slags oppfølging og tjenester vi mener du trenger. Vurderingene blir gjort ut fra opplysninger om:
                    <ul>
                        <li>alderen din</li>
                        <li>du har vært i jobb de siste månedene</li>
                        <li>du har vært registrert hos NAV de siste 2 årene</li>
                        <li>du har utfordringer med helse din eller andre forhold som gjør det vanskelig å komme i jobb</li>
                        <li>du har utdanning</li>
                    </ul>
                    Disse opplysningene og det vi vet om arbeidssøkere i omtrent samme situasjon som deg gjør at vi kan anta noe om mulighetene til å finne en jobb.
                    Vi vet noe om hvilke tjenester fra NAV som vu tror kan passe fo deg.
                    NAV bruker anonymiserte personopplysninger om arbeidssøkere til å
                    lage offentlig statistikk om arbeidsmarkedet.
                </Normaltekst>
            </div>
    );
}
