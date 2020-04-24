import React from 'react';
import { useFetchRegistrering, useFetchSituasjon } from '../../../../rest/api';
import { useAppStore } from '../../../../stores/app-store';
import { hasError, isPending } from '@nutgaard/use-fetch';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { hasData } from '../../../../rest/utils';
import { Registrering } from '../../../../rest/datatyper/registreringsData';
import { Situasjon } from '../../../../rest/datatyper/situasjonData';
import { formaterDato } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

const SituasjonPanelInnhold = () => {
	const {fnr} = useAppStore();
	const registrering = useFetchRegistrering(fnr);
	const situasjonHistorikk = useFetchSituasjon(fnr);

	if (isPending(registrering) || isPending(situasjonHistorikk)) {
		return <Laster/>;
	} else if (hasError(registrering) || hasError(situasjonHistorikk)) {
		return <Feilmelding/>;
	} else if (!hasData(registrering) || !registrering.data.registrering) {
		return <NoData tekst="Brukeren har ikke registrert seg gjennom den nye registreringsløsningen."/>;
	}
	const {registrering: brukerRegistrering} = registrering.data;

	const situasjoner = tilSituasjonVisning( situasjonHistorikk ? situasjonHistorikk.data : [], brukerRegistrering);

 const [gjeldende] = situasjoner.splice(0, 1);

	return (
		<>
			<div>
				Sist endret: {gjeldende.dato}
				{gjeldende.situasjon}
			</div>
			<Informasjonsbolk header="Tidligere">
			<div> {situasjoner.map((situasjon, idx) =>
				<div key={idx}>{situasjon.dato}: {situasjon.situasjon}</div>)
			}
			</div>
			</Informasjonsbolk>
		</>
	);
};

interface SituasjonVisning {
	dato: string;
	situasjon: string;
}

function tilSituasjonVisning(situasjoner: Situasjon[], registrering: Registrering): SituasjonVisning[] {
	const regBesvarelse = registrering.teksterForBesvarelse.find(value => value.sporsmalId === 'dinSituasjon');
	const regSituasjon: SituasjonVisning[] =
		regBesvarelse ?
			[{dato: formaterDato(registrering.opprettetDato),
				situasjon: regBesvarelse.svar + ' (fra arbeidssøkerregistrering)'}] : [];

	return situasjoner.map(sit => {
		return {dato: formaterDato(sit.opprettet), situasjon: sit.svarTekst};
	}).concat(regSituasjon);
}

export default SituasjonPanelInnhold;
