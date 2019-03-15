import React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import Tekstomrade from 'nav-frontend-tekstomrade';

export function PersonverninformasjonManuell() {
    return (
        <>
            <Systemtittel>Manuell</Systemtittel>
            <div>
                <ul>
                    <li>får du veiledning om mulighetene dine</li>
                    <li>kan du bruke din egen aktivitetsplan</li>
                    <li>får du vite om du har krav på annen økonomisk støtte</li>
                    <li>kan du ha dialog med veilederen din</li>
                </ul>
            </div>
            <div>
                <Systemtittel>H1</Systemtittel>
                <Tekstomrade>
                    {`Når du registrerer deg for å få mer veiledning, skal NAV vurdere hva slags informasjon, veiledning og hjelp du trenger.
                        Du vil derfor få noen spørsmål om situasjonen din slik at du kan få riktig hjelp.
                        Du kan endre på svarene hvis situasjonen din endrer seg. Det er bare veilederen din som kan se hva du har svart. Opplysningene dine blir lagret etter arkivloven. Les mer om hvordan NAV behandler personopplysninger.
                        Har du allerede registrert en CV eller jobbprofil?
                        Når du registrerer deg, vil CV-en og jobbprofilen
                        som du har lagt inn på arbeidsplassen.nav.no bli delt med veilederen din. Hvis det er opplysninger der som du ikke ønsker å dele, kan du endre dem på arbeidsplassen.nav.no før du registrerer deg.`}
                </Tekstomrade>
            </div>
        </>
    );
}
