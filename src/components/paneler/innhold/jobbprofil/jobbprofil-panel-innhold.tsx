import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import Lenke from 'nav-frontend-lenker';
import { RedigerJobbprofil } from './rediger-jobbprofil';
import SistEndret from '../../../felles/sist-endret';
import Grid from '../../../felles/grid';
import InformasjonsbolkListe from '../../../felles/informasjonsbolk-liste';
import { byggPamUrl } from '../../../../utils';
import { fetchAktorId, fetchCvOgJobbprofil, fetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster } from '../../../felles/fetch';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import { Alert } from '@navikt/ds-react';
import { isNotStartedOrPending, isRejected, isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { UnderOppfolgingData } from '../../../../rest/datatyper/underOppfolgingData';
import { AktorId } from '../../../../rest/datatyper/aktor-id';

const harJobbprofilData = (cvOgJobbprofil: ArenaPerson): boolean => cvOgJobbprofil && cvOgJobbprofil.jobbprofil != null;

const JobbprofilPanelInnhold = (): React.ReactElement => {
	const { fnr } = useAppStore();
	const cvOgJobbprofil = usePromise<AxiosResponse<ArenaPerson>>(() => fetchCvOgJobbprofil(fnr));
	const underOppfolging = usePromise<AxiosResponse<UnderOppfolgingData>>(() => fetchUnderOppfolging(fnr));
	const aktorId = usePromise<AxiosResponse<AktorId>>(() => fetchAktorId(fnr));

	if (
		isNotStartedOrPending(cvOgJobbprofil) ||
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
	if (cvOgJobbprofil.result?.status) {
		if (cvOgJobbprofil.result.status === 403 || cvOgJobbprofil.result.status === 401) {
			return (
				<Alert variant="info" className="alertstripe_intern">
					Du har ikke tilgang til å se jobbprofil for denne brukeren. Årsaker kan være
					<ul>
						<li>
							Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang. Be bruker gå inn
							på nav.no og oppdatere CV'en sin.
						</li>
					</ul>
				</Alert>
			);
		}
	} else {
		if (cvOgJobbprofil.result?.status) {
			if (
				cvOgJobbprofil.result.status === 404 ||
				cvOgJobbprofil.result.status === 204 ||
				!harJobbprofilData(cvOgJobbprofil.result.data)
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
			} else if (!isResolved(cvOgJobbprofil)) {
				return <Feilmelding />;
			}
		}
	}

	const {
		sistEndret,
		onsketYrke,
		onsketArbeidssted,
		onsketAnsettelsesform,
		onsketArbeidstidsordning,
		heltidDeltid,
		kompetanse
		// @ts-ignore
	} = cvOgJobbprofil.result.data.jobbprofil;

	const arbeidssted = onsketArbeidssted.map(sted => sted.stedsnavn);
	const yrker = onsketYrke.map(yrke => yrke.tittel);
	const ansettelsesform = onsketAnsettelsesform.map(form => form.tittel);
	const arbeidstid = onsketArbeidstidsordning.map(tid => tid.tittel);
	const kompetanser = kompetanse.map(kompetansen => kompetansen.tittel);
	const heltidDeltidList = [heltidDeltid.heltid && 'Heltid', heltidDeltid.deltid && 'Deltid'];

	return (
		<>
			<RedigerJobbprofil erManuell={erManuell} jobbprofilRegistreringsLenke={pamUrl} />
			<SistEndret sistEndret={sistEndret} onlyYearAndMonth={false} />
			<Grid columns={4} gap="1rem">
				<InformasjonsbolkListe header="Områder" list={arbeidssted} />
				<InformasjonsbolkListe header="Jobber og yrker" list={yrker} />
				<InformasjonsbolkListe header="Heltid eller deltid" list={heltidDeltidList} />
				<InformasjonsbolkListe header="Arbeidstider" list={arbeidstid} />
				<InformasjonsbolkListe header="Ansettelsesform" list={ansettelsesform} />
				<InformasjonsbolkListe header="Kompetanser" list={kompetanser} />
			</Grid>
		</>
	);
};

export default JobbprofilPanelInnhold;
