import React from 'react';
import { Innholdstittel, Normaltekst, Systemtittel, Undertittel } from 'nav-frontend-typografi';
import hiddenIf from '../../utils/hidden-if';

function PersonverninformasjonSykmeldt() {
    return (
        <div id="personverninformasjon-modal__innhold">
            <Innholdstittel>Mer veiledning fra NAV</Innholdstittel>
            <Systemtittel>Når du har registrert deg</Systemtittel>
                <ul>
                    <li> får du veiledning om mulighetene dine </li>
                    <li> kan du bruke din egen aktivitetsplan</li>
                    <li> får du vite om du har krav på annen økonomisk støtte</li>
                    <li> kan du ha dialog med veilederen din</li>
                </ul>
            <div>
                <Undertittel>Behandling av personopplysninger</Undertittel>
                <Normaltekst>
                    Når du registrerer deg for å få mer veiledning, skal NAV vurdere hva slags informasjon, veiledning og hjelp du trenger. Du vil derfor få noen spørsmål om situasjonen din slik at du kan få riktig hjelp. Du kan endre på svarene hvis situasjonen din endrer seg. Det er bare veilederen din som kan se hva du har svart. Opplysningene dine blir lagret etter arkivloven. Les mer om hvordan NAV behandler personopplysninger på <a href="https://www.nav.no/personvern">https://www.nav.no/personvern</a>.
                </Normaltekst>
                <Undertittel>Har du allerede registrert en CV eller jobbprofil? </Undertittel>
                <Normaltekst>Når du registrerer deg, vil CV-en og jobbprofilen som du har lagt inn på arbeidsplassen.nav.no bli delt med veilederen din. Hvis det er opplysninger der som du ikke ønsker å dele, kan du endre dem på <a href="https://arbeidsplassen.nav.no/">https://arbeidsplassen.nav.no/</a> før du registrerer deg.</Normaltekst>
            </div>
        </div>
    );
}

export default hiddenIf(PersonverninformasjonSykmeldt);
