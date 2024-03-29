import { BodyShort } from '@navikt/ds-react';
import { Registrering, Sporsmal } from '../../../../rest/datatyper/registreringsData';
import FloatGrid from '../../../felles/float-grid';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { formaterDato, formateStringInUpperAndLowerCase, visEmdashHvisNull } from '../../../../utils';
import { EndringIRegistreringsdata } from '../../../../rest/datatyper/EndringIRegistreringdata';
import { mapEndretSvarFraRegistrering } from './mapEndretSvarFraRegistrering';

export function SporsmalsListe(props: {
	registrering?: Registrering;
	endringerIRegistreringsData?: EndringIRegistreringsdata;
}) {
	if (!props.registrering || !props.registrering.teksterForBesvarelse) {
		return null;
	}

	const sporsmaal = props.registrering.teksterForBesvarelse;

	return (
		<FloatGrid columns={2} gap={8}>
			{sporsmaal
				.map(s => mapEndretSvarFraRegistrering(s, props.endringerIRegistreringsData))
				.map(sporsmalvisning)}
		</FloatGrid>
	);
}

function sporsmalvisning(sporsmal: Sporsmal) {
	return (
		<Informasjonsbolk
			className="underinformasjon"
			header={sporsmal.sporsmal}
			headerTypo="element"
			key={sporsmal.sporsmalId}
		>
			<BodyShort>{visEmdashHvisNull(sporsmal.svar)}</BodyShort>
			{sporsmal.endretDato && (
				<BodyShort className="italic-gra">{`Endret: ${formaterDato(sporsmal.endretDato)}`}</BodyShort>
			)}
			{sporsmal.endretAv && (
				<BodyShort className="italic-gra">{`Endret av: ${formateStringInUpperAndLowerCase(
					sporsmal.endretAv
				)}`}</BodyShort>
			)}
		</Informasjonsbolk>
	);
}
