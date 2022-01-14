import React from 'react';
import { BodyShort, Heading, Link } from '@navikt/ds-react';

function PersonverninformasjonSykmeldt() {
	return (
		<div id="personverninformasjon-modal__innhold">
			<Heading level="1" size="xlarge">
				Mer veiledning fra NAV
			</Heading>
			<Heading level="2" size="large">
				Når du har registrert deg
			</Heading>
			<ul>
				<li> får du veiledning om mulighetene dine </li>
				<li> kan du bruke din egen aktivitetsplan</li>
				<li> får du vite om du har krav på annen økonomisk støtte</li>
				<li> kan du ha dialog med veilederen din</li>
			</ul>
			<div>
				<Heading level="3" size="medium">
					Behandling av personopplysninger
				</Heading>
				<BodyShort>
					Når du registrerer deg for å få mer veiledning, skal NAV vurdere hva slags informasjon, veiledning
					og hjelp du trenger. Du vil derfor få noen spørsmål om situasjonen din slik at du kan få riktig
					hjelp. Du kan endre på svarene hvis situasjonen din endrer seg. Det er bare veilederen din som kan
					se hva du har svart. Opplysningene dine blir lagret etter arkivloven. Les mer om hvordan NAV
					behandler personopplysninger på{' '}
					<Link href="https://www.nav.no/personvern">https://www.nav.no/personvern</Link>.
				</BodyShort>
				<Heading level="3" size="medium">
					Har du allerede registrert en CV eller jobbprofil?{' '}
				</Heading>
				<BodyShort>
					Når du registrerer deg, vil CV-en og jobbprofilen som du har lagt inn på arbeidsplassen.nav.no bli
					delt med veilederen din. Hvis det er opplysninger der som du ikke ønsker å dele, kan du endre dem på{' '}
					<Link href="https://arbeidsplassen.nav.no/">https://arbeidsplassen.nav.no/</Link> før du registrerer
					deg.
				</BodyShort>
			</div>
		</div>
	);
}

export default PersonverninformasjonSykmeldt;
