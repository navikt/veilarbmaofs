import React from 'react';
import { Innholdstittel, Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Tekstomrade from 'nav-frontend-tekstomrade';

export function PersonverninformasjonSykmeldt() {
    return (
        <div id="personverninformasjon--modal__innhold">
            <Sidetittel>Sykemeldt manuell registrering</Sidetittel>
                <ul>
                    <li>får du veiledning basert på behovene dine</li>
                    <li>har du mulighet til å kommunisere direkte med veilederen din</li>
                    <li>kan du bruke din egen aktivitetsplan</li>
                </ul>
            <div>
                <Innholdstittel>Vil du registrere deg for å få mer veiledning fra NAV?</Innholdstittel>
                <Tekstomrade>
                    {` Hvis du regitrer deg for mer veiledning fra NAV, vil veilederen din få se CV-en eller jobbprofilen som du har lagt inn på <a href="https://arbeidsplassen.nav.no"> arbeidsplassen</a>`}
                </Tekstomrade>
                <Normaltekst>
                    Samtykket du ga der, gjelder ikke her. Er det opplysninger du ikke ønsker å dele med veilederen, må du endre dem før du eventuelt registerer deg for mer veiledning.
                </Normaltekst>
            </div>
        </div>
    );
}
