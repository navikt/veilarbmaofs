import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import Lenke from 'nav-frontend-lenker';
import SistEndret from '../../../felles/sist-endret';
import Grid from '../../../felles/grid';
import InformasjonsbolkListe from '../../../felles/informasjonsbolk-liste';
import { byggPamUrl, formatStringInUpperAndLowerCaseUnderscore } from '../../../../utils';
import { fetchAktorId, fetchCvOgJobbonsker, fetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster } from '../../../felles/fetch';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
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

const harJobbonskerdata = (cvOgJobbonsker: UsePromise<AxiosResponse<ArenaPerson>, AxiosError>): boolean => {
	return (
		cvOgJobbonsker.result != null &&
		cvOgJobbonsker.result.data != null &&
		cvOgJobbonsker.result.data.jobbprofil != null
	);
};

const JobbonskerPanelinnhold = (): React.ReactElement => {
	const { fnr } = useAppStore();

	const cvOgJobbonsker = useAxiosPromise<ArenaPerson>(() => fetchCvOgJobbonsker(fnr));
	const underOppfolging = useAxiosPromise<UnderOppfolgingData>(() => fetchUnderOppfolging(fnr));
	const aktorId = useAxiosPromise<AktorId>(() => fetchAktorId(fnr));

	if (
		isNotStartedOrPending(cvOgJobbonsker) ||
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

	if (cvOgJobbonsker.error?.response) {
		if (cvOgJobbonsker.error?.response?.status === 403 || cvOgJobbonsker.error?.response?.status === 401) {
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
		cvOgJobbonsker.error?.response?.status === 404 ||
		cvOgJobbonsker.result?.status === 204 ||
		!harJobbonskerdata(cvOgJobbonsker)
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
	} else if (!isResolved(cvOgJobbonsker)) {
		return <Feilmelding />;
	}

	if (harJobbonskerdata(cvOgJobbonsker)) {
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
		} = cvOgJobbonsker.result.data.jobbprofil!;
		const arbeidssted = onsketArbeidssted.map(sted => sted.stedsnavn);
		const yrker = onsketYrke.map(yrke => yrke.tittel);
		const ansettelsesform = onsketAnsettelsesform.map(form =>
			formatStringInUpperAndLowerCaseUnderscore(form.tittel)
		);
		const arbeidstid = onsketArbeidstidsordning.map(tid => formatStringInUpperAndLowerCaseUnderscore(tid.tittel));
		const arbeidsdag = onsketArbeidsdagordning.map(dag => formatStringInUpperAndLowerCaseUnderscore(dag.tittel));
		const arbeidsskift = onsketArbeidsskiftordning.map(skift =>
			formatStringInUpperAndLowerCaseUnderscore(skift.tittel)
		);
		const oppstartstid = [formatStringInUpperAndLowerCaseUnderscore(oppstart)];
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
