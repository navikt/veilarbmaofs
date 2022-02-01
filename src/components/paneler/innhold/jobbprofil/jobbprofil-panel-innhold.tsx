import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import Lenke from 'nav-frontend-lenker';
import { RedigerJobbprofil } from './rediger-jobbprofil';
import SistEndret from '../../../felles/sist-endret';
import Grid from '../../../felles/grid';
import InformasjonsbolkListe from '../../../felles/informasjonsbolk-liste';
import { byggPamUrl } from '../../../../utils';
import { useFetchAktorId, useFetchCvOgJobbprofil, useFetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster } from '../../../felles/fetch';
import { isPending, hasError, WithData, FetchResult } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import { ArenaPerson } from '../../../../rest/datatyper/arenaperson';
import { Alert } from '@navikt/ds-react';

const harJobbprofilData = (cvOgJobbprofil: FetchResult<ArenaPerson>): boolean => {
	const withData = cvOgJobbprofil as WithData<ArenaPerson>;
	return withData.data && withData.data.jobbprofil != null;
};

const JobbprofilPanelInnhold = () => {
	const { fnr } = useAppStore();
	const cvOgJobbprofil = useFetchCvOgJobbprofil(fnr);
	const underOppfolging = useFetchUnderOppfolging(fnr);
	const aktorId = useFetchAktorId(fnr);

	if (isPending(cvOgJobbprofil) || isPending(underOppfolging) || isPending(aktorId)) {
		return <Laster midtstilt={true} />;
	} else if (hasError(underOppfolging) || hasError(aktorId) || !hasData(underOppfolging) || !hasData(aktorId)) {
		return <Feilmelding />;
	} else if (!isPending(underOppfolging) && !underOppfolging.data.underOppfolging) {
		return (
			<Alert variant="info" className="alertstripe_intern">
				Bruker er ikke under arbeidsrettet oppfølging
			</Alert>
		);
	}

	const underOppfolgingData = underOppfolging.data;
	const aktorIdData = aktorId.data;

	const erManuell = underOppfolgingData.erManuell;
	const brukerAktorId = aktorIdData.aktorId;
	const pamUrl = byggPamUrl(fnr);

	// Sjekk alltid tilgang først
	if (cvOgJobbprofil.statusCode === 403 || cvOgJobbprofil.statusCode === 401) {
		return (
			<Alert variant="info" className="alertstripe_intern">
				Du har ikke tilgang til å se jobbprofil for denne brukeren. Årsaker kan være
				<ul>
					<li>
						Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang. Be bruker gå inn på
						nav.no og oppdatere CV'en sin.
					</li>
				</ul>
			</Alert>
		);
	} else if (
		cvOgJobbprofil.statusCode === 404 ||
		cvOgJobbprofil.statusCode === 204 ||
		!harJobbprofilData(cvOgJobbprofil)
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
	} else if (!hasData(cvOgJobbprofil)) {
		return <Feilmelding />;
	}

	const {
		sistEndret,
		onsketYrke,
		onsketArbeidssted,
		onsketAnsettelsesform,
		onsketArbeidstidsordning,
		heltidDeltid,
		kompetanse
	} = cvOgJobbprofil.data.jobbprofil;

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
