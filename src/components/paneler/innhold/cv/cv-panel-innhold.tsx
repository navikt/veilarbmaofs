import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import Lenke from 'nav-frontend-lenker';
import SistEndret from '../../../felles/sist-endret';
import { LastNedCV } from './last-ned-cv';
import { RedigerCV } from './rediger-cv';
import Sammendrag from './sammendrag';
import FloatGrid from '../../../felles/float-grid';
import Arbeidserfaring from './arbeidserfaring';
import AnnenErfaring from './annen-erfaring';
import Utdanning from './utdanning';
import Kurs from './kurs';
import Godkjenninger from "./godkjenninger";
import AndreGodkjenninger from './andre-godkjenninger';
import Forerkort from './forerkort';
import Sprak from './sprak';
import Fagdokumentasjon from './fagdokumentasjoner';
import { byggPamUrl } from '../../../../utils';
import { useFetchAktorId, useFetchCvOgJobbprofil, useFetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster } from '../../../felles/fetch';
import { hasError, isPending } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import { CvIkkeSynligInfo } from './cv-ikke-synlig-info';
import { SynlighetForArbeidsgiver } from './synlighet-for-arbeidsgiver';
import './cv-panel-innhold.less';

const CvPanelInnhold = () => {
	const { fnr } = useAppStore();
	const cvOgJobbprofil = useFetchCvOgJobbprofil(fnr);
	const underOppfolging = useFetchUnderOppfolging(fnr);
	const aktorId = useFetchAktorId(fnr);

	if (isPending(cvOgJobbprofil) || isPending(underOppfolging) || isPending(aktorId)) {
		return <Laster midtstilt={true} />;
	} else if (hasError(underOppfolging) || hasError(aktorId) || !hasData(underOppfolging) || !hasData(aktorId)) {
		return <Feilmelding />;
	} else if (!isPending(underOppfolging) && !hasData(underOppfolging)) {
		return <AlertStripeInfo>Bruker er ikke under arbeidsrettet oppfølging</AlertStripeInfo>;
	}

	const underOppfolgingData = underOppfolging.data;
	const aktorIdData = aktorId.data;

	const erManuell = underOppfolgingData.erManuell;
	const brukerAktorId = aktorIdData.aktorId;
	const endreCvUrl = byggPamUrl(brukerAktorId || '', 'cv');
	const lastNedCvUrl = byggPamUrl(brukerAktorId || '', 'cv/pdf');

	if (cvOgJobbprofil.statusCode === 403 || cvOgJobbprofil.statusCode === 401) {
		return (
			<AlertStripeInfo className="cv-alert-ikke-tilgang">
				Du kan ikke se CV-en, be brukeren om å:
				<ul>
					<li>logge inn på arbeidsplassen.no</li>
					<li>lese teksten om at du må dele CV-en med NAV</li>
					<li>gå videre og gjennomføre det tjenesten ber om</li>
				</ul>
				Ved å gjøre dette får brukeren informasjon om behandlingsgrunnlaget, og du vil se CV-en.
			</AlertStripeInfo>
		);
	} else if (cvOgJobbprofil.statusCode === 404 || cvOgJobbprofil.statusCode === 204) {
		return (
			<AlertStripeInfo>
				Denne personen har ikke registrert CV.&nbsp;&nbsp;
				{erManuell && aktorId && (
					<Lenke target="_blank" href={endreCvUrl}>
						Registrer her
					</Lenke>
				)}
			</AlertStripeInfo>
		);
	} else if (!hasData(cvOgJobbprofil)) {
		return <Feilmelding />;
	}

	const {
		fagdokumentasjoner,
		sammendrag,
		arbeidserfaring,
		annenErfaring,
		utdanning,
		godkjenninger,
		andreGodkjenninger,
		forerkort,
		sprak,
		kurs,
		sistEndret,
		synligForArbeidsgiver,
		jobbprofil
	} = cvOgJobbprofil.data;

	const erCvSynligForArbeidsgiver = synligForArbeidsgiver || false;
	const harJobbprofil = jobbprofil != null;

	return (
		<>
			<LastNedCV erManuell={erManuell} lastNedCvLenke={lastNedCvUrl} />
			<RedigerCV erManuell={erManuell} cvRegistreringsLenke={endreCvUrl} />
			<SistEndret sistEndret={sistEndret} onlyYearAndMonth={false} className="blokk-xs" />
			<SynlighetForArbeidsgiver erSynlig={erCvSynligForArbeidsgiver} />
			<CvIkkeSynligInfo erSynlig={erCvSynligForArbeidsgiver} harJobbprofil={harJobbprofil} />
			<Sammendrag sammendrag={sammendrag} />
			<FloatGrid columns={2} gap={8}>
				<Arbeidserfaring arbeidserfaring={arbeidserfaring} />
				<AnnenErfaring annenErfaring={annenErfaring} />
				<Utdanning utdanning={utdanning} />
				<Kurs kurs={kurs} />
				<Godkjenninger godkjenninger={godkjenninger} />
				<AndreGodkjenninger andreGodkjenninger={andreGodkjenninger} />
				<Forerkort forerkort={forerkort} />
				<Fagdokumentasjon fagdokumentasjoner={fagdokumentasjoner} />
				<Sprak sprak={sprak} />
			</FloatGrid>
		</>
	);
};

export default CvPanelInnhold;
