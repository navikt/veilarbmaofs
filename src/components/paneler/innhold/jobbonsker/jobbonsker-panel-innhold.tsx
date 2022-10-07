import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import Lenke from 'nav-frontend-lenker';
import SistEndret from '../../../felles/sist-endret';
import Grid from '../../../felles/grid';
import InformasjonsbolkListe from '../../../felles/informasjonsbolk-liste';
import { byggPamUrl, formatStringInUpperAndLowerCaseUnderscore } from '../../../../utils';
import { fetchAktorId, fetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster } from '../../../felles/fetch';
import { ArenaPerson, JobbprofilOppstartstype } from '../../../../rest/datatyper/arenaperson';
import { Alert } from '@navikt/ds-react';
import {
	isNotStartedOrPending,
	isRejected,
	isResolved,
	useAxiosPromise,
	UsePromise
} from '../../../../utils/use-promise';
import { UnderOppfolgingData } from '../../../../rest/datatyper/underOppfolgingData';
import { AktorId } from '../../../../rest/datatyper/aktor-id';
import { AxiosError, AxiosResponse } from 'axios';
import { RedigerCV } from '../cv/rediger-cv';

const asciiTilNorsk = (tekst: string) => {
	switch (tekst) {
		case 'UKEDAGER':
			return 'Ukedager';
		case 'LOERDAG':
			return 'Lørdag';
		case 'SOENDAG':
			return 'Søndag';
		case 'LAERLING':
			return 'Lærling';
		case 'SELVSTENDIG_NAERINGSDRIVENDE':
			return 'Selvstendig næringsdrivende';
		default:
			return tekst;
	}
};

const oppstartstypeTilTekst = (oppstartstype: JobbprofilOppstartstype): string => {
	switch (oppstartstype) {
		case JobbprofilOppstartstype.ETTER_AVTALE:
			return 'Etter avtale';
		case JobbprofilOppstartstype.ETTER_TRE_MND:
			return 'Etter tre måneders oppsigelsestid';
		case JobbprofilOppstartstype.LEDIG_NAA:
			return 'Kan begynne nå';
		default:
			return '';
	}
};

const harJobbonskerdata = (cvOgJobbonsker: UsePromise<AxiosResponse<ArenaPerson>, AxiosError>): boolean => {
	return (
		cvOgJobbonsker.result != null &&
		cvOgJobbonsker.result.data != null &&
		cvOgJobbonsker.result.data.jobbprofil != null
	);
};

interface JobbonskerPanelProps {
	cvJobbonskerPromise: UsePromise<AxiosResponse<ArenaPerson>, AxiosError>;
}

const JobbonskerPanelinnhold = (props: JobbonskerPanelProps): React.ReactElement => {
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
	const aktorIdData = aktorId.result.data;

	const erManuell = underOppfolgingData.erManuell;
	const brukerAktorId = aktorIdData.aktorId;
	const pamUrl = byggPamUrl(fnr);

	// Sjekk alltid tilgang først

	if (props.cvJobbonskerPromise.error?.response) {
		if (
			props.cvJobbonskerPromise.error?.response?.status === 403 ||
			props.cvJobbonskerPromise.error?.response?.status === 401
		) {
			return (
				<Alert variant="info" className="alertstripe_intern">
					Du har ikke tilgang til å se jobbønsker for denne brukeren. Årsaker kan være
					<ul>
						<li>
							Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang. Be bruker gå inn
							på nav.no og oppdatere CV-en sin.
						</li>
					</ul>
				</Alert>
			);
		}
	}

	if (
		props.cvJobbonskerPromise.error?.response?.status === 404 ||
		props.cvJobbonskerPromise.result?.status === 204 ||
		!harJobbonskerdata(props.cvJobbonskerPromise)
	) {
		return (
			<Alert variant="info" className="alertstripe_intern">
				Denne personen har ikke registrert jobbønsker.&nbsp;&nbsp;
				{erManuell && brukerAktorId && (
					<Lenke target="_blank" href={pamUrl}>
						Registrer her
					</Lenke>
				)}
			</Alert>
		);
	} else if (!isResolved(props.cvJobbonskerPromise)) {
		return <Feilmelding />;
	}

	if (harJobbonskerdata(props.cvJobbonskerPromise)) {
		const {
			sistEndret,
			onsketYrke,
			onsketArbeidssted,
			onsketAnsettelsesform,
			onsketArbeidstidsordning,
			onsketArbeidsdagordning,
			onsketArbeidsskiftordning,
			heltidDeltid,
			oppstart
		} = props.cvJobbonskerPromise.result.data.jobbprofil!;
		const arbeidssted = onsketArbeidssted.map(sted => sted.stedsnavn);
		const yrker = onsketYrke.map(yrke => yrke.tittel);
		const ansettelsesform = onsketAnsettelsesform.map(form =>
			formatStringInUpperAndLowerCaseUnderscore(asciiTilNorsk(form.tittel))
		);
		const arbeidstid = onsketArbeidstidsordning.map(tid => formatStringInUpperAndLowerCaseUnderscore(tid.tittel));
		const arbeidsdag = onsketArbeidsdagordning.map(dag => asciiTilNorsk(dag.tittel));
		const arbeidsskift = onsketArbeidsskiftordning.map(skift =>
			formatStringInUpperAndLowerCaseUnderscore(skift.tittel)
		);
		const oppstartstid = [oppstartstypeTilTekst(oppstart)];
		const heltidDeltidList = [heltidDeltid.heltid && 'Heltid', heltidDeltid.deltid && 'Deltid'];

		return (
			<>
				<RedigerCV erManuell={erManuell} cvRegistreringsLenke={pamUrl} />
				<SistEndret sistEndret={sistEndret} onlyYearAndMonth={false} />
				<Grid columns={4} gap="1rem">
					<InformasjonsbolkListe header="Jobber og yrker" list={yrker} />
					<InformasjonsbolkListe header="Områder" list={arbeidssted} />
					<InformasjonsbolkListe header="Heltid eller deltid" list={heltidDeltidList} />
					<InformasjonsbolkListe
						header="Arbeidstider"
						list={[...arbeidstid, ...arbeidsdag, ...arbeidsskift]}
					/>
					<InformasjonsbolkListe header="Ansettelsesform" list={ansettelsesform} />
					<InformasjonsbolkListe header="Oppstart" list={oppstartstid} />
				</Grid>
			</>
		);
	}
	return <Feilmelding />;
};

export default JobbonskerPanelinnhold;
