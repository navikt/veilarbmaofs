import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
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
import Godkjenninger from './godkjenninger';
import AndreGodkjenninger from './andre-godkjenninger';
import Forerkort from './forerkort';
import Sprak from './sprak';
import Fagdokumentasjon from './fagdokumentasjoner';
import Kompetanser from './kompetanser';
import { byggPamUrl } from '../../../../utils';
import { fetchAktorId, fetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster } from '../../../felles/fetch';
import { CvIkkeSynligInfo } from './cv-ikke-synlig-info';
import './cv-panel-innhold.less';
import { Alert } from '@navikt/ds-react';
import {
	isNotStartedOrPending,
	isRejected,
	isResolved,
	useAxiosPromise,
	UsePromise
} from '../../../../utils/use-promise';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import { UnderOppfolgingData } from '../../../../rest/datatyper/underOppfolgingData';
import { AktorId } from '../../../../rest/datatyper/aktor-id';
import { AxiosError, AxiosResponse } from 'axios';

interface CvPanelProps {
	cvJobbonskerPromise: UsePromise<AxiosResponse<ArenaPerson>, AxiosError>;
}

const CvPanelInnhold = (props: CvPanelProps): React.ReactElement => {
	const { fnr } = useAppStore();

	const underOppfolging = useAxiosPromise<UnderOppfolgingData>(() => fetchUnderOppfolging(fnr));
	const aktorId = useAxiosPromise<AktorId>(() => fetchAktorId(fnr));

	if (
		isNotStartedOrPending(props.cvJobbonskerPromise) ||
		isNotStartedOrPending(underOppfolging) ||
		isNotStartedOrPending(aktorId)
	) {
		return <Laster midtstilt={true} />;
	} else if (
		isRejected(underOppfolging) ||
		isRejected(aktorId) ||
		!isResolved(underOppfolging) ||
		!isResolved(aktorId)
	) {
		return <Feilmelding />;
	} else if (!isNotStartedOrPending(underOppfolging) && !underOppfolging.result.data.underOppfolging) {
		return (
			<Alert variant="info" className="alertstripe_intern">
				Bruker er ikke under arbeidsrettet oppfølging
			</Alert>
		);
	}

	const underOppfolgingData = underOppfolging.result.data;
	const erManuell = underOppfolgingData.erManuell;

	const endreCvUrl = byggPamUrl(fnr);
	const lastNedCvUrl = byggPamUrl(fnr, '/cv/pdf');

	if (props.cvJobbonskerPromise.error?.response) {
		if (
			props.cvJobbonskerPromise.error.response.status === 403 ||
			props.cvJobbonskerPromise.error.response.status === 401
		) {
			return (
				<Alert variant="info" className="cv-alert-ikke-tilgang alertstripe_intern">
					Du kan ikke se CV-en, be brukeren om å:
					<ul>
						<li>logge inn på arbeidsplassen.no</li>
						<li>lese teksten om at du må dele CV-en med NAV</li>
						<li>gå videre og gjennomføre det tjenesten ber om</li>
					</ul>
					Ved å gjøre dette får brukeren informasjon om behandlingsgrunnlaget, og du vil se CV-en.
				</Alert>
			);
		}
	}

	if (props.cvJobbonskerPromise.error?.response?.status === 404 || props.cvJobbonskerPromise.result?.status === 204) {
		return (
			<Alert variant="info" className="alertstripe_intern">
				Denne personen har ikke registrert CV.&nbsp;&nbsp;
				{erManuell && aktorId && (
					<Lenke target="_blank" href={endreCvUrl}>
						Registrer her
					</Lenke>
				)}
			</Alert>
		);
	} else if (!isResolved(props.cvJobbonskerPromise)) {
		return <Feilmelding />;
	}

	if (props.cvJobbonskerPromise.result?.data) {
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
			jobbprofil
		} = props.cvJobbonskerPromise.result.data;

		return (
			<>
				<LastNedCV erManuell={erManuell} lastNedCvLenke={lastNedCvUrl} />
				<RedigerCV erManuell={erManuell} cvRegistreringsLenke={endreCvUrl} />
				<SistEndret sistEndret={sistEndret} onlyYearAndMonth={false} className="blokk-xs" />
				<CvIkkeSynligInfo />
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
					<Kompetanser kompetanse={jobbprofil?.kompetanse} />
				</FloatGrid>
			</>
		);
	}
	return <Feilmelding />;
};

export default CvPanelInnhold;
