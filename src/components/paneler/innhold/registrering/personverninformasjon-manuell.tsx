import React from 'react';
import { Innholdstittel, Normaltekst, Systemtittel, Undertittel } from 'nav-frontend-typografi';

function PersonverninformasjonManuell() {
	return (
		<div className="personverninformasjon-modal__innhold">
			<Innholdstittel>Når du har registrert deg</Innholdstittel>
			<ul>
				<li>får du hjelp til å komme i jobb</li>
				<li>kan du søke om dagpenger eller annen økonomisk støtte</li>
				<li>vil arbeidsgivere finne deg i CV-basen vår</li>
				<li>kan du få varsler om ledige stillinger</li>
				<li>kan du bruke din egen aktivitetsplan</li>
			</ul>
			<Systemtittel>Rettigheter</Systemtittel>
			<ul>
				<li>
					Du har krav på at NAV vurderer behovet ditt for veiledning. Dette er en rettighet du har etter
					NAV-loven § 14a se{' '}
					<a href="https://lovdata.no/NL/lov/2006-06-16-20/%C2%A714a">
						https://lovdata.no/NL/lov/2006-06-16-20/%C2%A714a
					</a>
					.
				</li>
				<li>Du får et brev der du kan lese mer om tjenestene vi foreslår for deg.</li>
			</ul>
			<Systemtittel>Plikter</Systemtittel>
			<ul>
				<li>Du må sende meldekort hver 14. dag. Det er et krav for å få oppfølging og økonomisk støtte.</li>
				<li>Du må være aktiv arbeidssøker, søke på ledige stillinger og holde CV-en oppdatert.</li>
			</ul>
			<Systemtittel>Dine opplysninger</Systemtittel>
			<Normaltekst>
				NAV vurderer hva slags veiledning du trenger når du registrerer deg som jobbsøker. For å gjøre denne
				vurderingen må vi ha opplysninger om
			</Normaltekst>
			<div className="div--pl1">
				<ul>
					<li>alderen din</li>
					<li>du har vært i jobb</li>
					<li>utdanningen din</li>
					<li>eventuelle utfordringer</li>
				</ul>
			</div>
			<Normaltekst>
				Vi har også opplysninger om arbeidssøkere i omtrent samme situasjon som deg. Det gjør at vi kan anta noe
				om mulighetene dine til å finne en jobb. På bakgrunn av dette blir det laget et automatisk forslag til
				hvilke tjenester vi tror kan passe for deg. En veileder vurderer forslaget og sender deg et vedtak i
				posten.
			</Normaltekst>
			<Undertittel>Har du allerede registrert en CV eller jobbprofil på arbeidsplassen.nav.no?</Undertittel>
			<Normaltekst>
				Når du fullfører registreringen som arbeidssøker gjelder ikke samtykket du ga for å opprette CV og
				jobbprofil. CV-en og jobbprofilen blir tilgjengelig for veilederen som skal vurdere dine behov. Du må
				derfor endre opplysninger du ikke ønsker å dele på{' '}
				<a href="https://arbeidsplassen.nav.no/ ">https://arbeidsplassen.nav.no/</a> før du starter
				registreringen.
			</Normaltekst>
			<Undertittel>Behandling av personopplysninger </Undertittel>
			<div className="blokk-xxs">
				<Normaltekst>
					Opplysningene dine blir lagret etter arkivloven. NAV bruker anonymiserte personopplysninger om
					arbeidssøkere til å lage offentlig statistikk om arbeidsmarkedet. Les mer om hvordan NAV behandler
					personopplysninger på <a href="https://www.nav.no/personvern">https://www.nav.no/personvern</a>.
				</Normaltekst>
			</div>
			<Normaltekst>
				<strong>Tips! </strong>Du må fullføre registreringen før du kan søke om dagpenger.
			</Normaltekst>
		</div>
	);
}

export default PersonverninformasjonManuell;
