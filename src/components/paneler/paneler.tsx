import React from 'react';
import RegistreringPanel from './innhold/registrering/registrering-panel-innhold';
import CvPanel from './innhold/cv/cv-panel-innhold';
import JobbprofilPanelInnhold from './innhold/jobbprofil/jobbprofil-panel-innhold';
import OppfolgingPanelInnhold from './innhold/oppfolging/oppfolging-panel-innhold';
import JobbsokerkompetansePanel from './innhold/jobbsokerkompetanse/jobbsokerkompetanse-panel-innhold';
import Panel from './panel';
import YtelserPanelInnhold from './innhold/ytelser/ytelser-panel-innhold';
import PersonaliaPanelInnhold from './innhold/personalia/personalia-panel-innhold';
import PersonaliaV2PanelInnhold from './innhold/personaliaV2/personaliav2-panel-innhold';
import { useFetchFeatureToggle, useFetchOppfolgingsstatus } from '../../rest/api';
import { useAppStore } from '../../stores/app-store';
import { erBrukerSykmeldt } from '../../utils/arena-status-utils';
import { hasData } from '../../rest/utils';
import { hasHashParam, hasQueryParam } from '../../utils';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';
import './paneler.less';
import Show from '../felles/show';
import { PERSONALIA_DATA_FRA_PDL } from '../../rest/datatyper/feature';

export const Paneler = () => {
	const { fnr } = useAppStore();
	const oppfolgingstatus = useFetchOppfolgingsstatus(fnr);
	const apneRegistrering = hasQueryParam('visRegistreringDetaljer') || hasHashParam('apneRegistrering');
	const apneTilrettelegging = hasHashParam('apneTilretteleggingsbehov');
	const features = useFetchFeatureToggle();
	const registreringPanelNavn =
		hasData(oppfolgingstatus) && erBrukerSykmeldt(oppfolgingstatus.data)
			? 'Registrering fra sykefravær'
			: 'Registrering';

	return (
		<div className="paneler">
			<Panel name="registrering" tittel={registreringPanelNavn} defaultOpen={apneRegistrering}>
				<RegistreringPanel />
			</Panel>

			<Panel name="cv" tittel="CV">
				<CvPanel />
			</Panel>

			<Panel name="jobbprofil" tittel="Jobbprofil">
				<JobbprofilPanelInnhold />
			</Panel>

			<Panel name="tilretteleggingsbehov" tittel="Behov for tilrettelegging" defaultOpen={apneTilrettelegging}>
				<TilretteleggingsbehovSpa fnr={fnr} viewType={TilretteleggingsbehovViewType.VIS_TILRETTELEGGINGSBEHOV} />
			</Panel>

			<Panel name="personalia" tittel="Personalia">
				<PersonaliaPanelInnhold />
			</Panel>

			<Show if={(hasData(features) && features.data[PERSONALIA_DATA_FRA_PDL])}>
				<Panel name="personaliaFraPdl" tittel="PersonaliaV2">
					<PersonaliaV2PanelInnhold />
				</Panel>
			</Show>

			<Panel name="ytelser" tittel="Ytelser">
				<YtelserPanelInnhold />
			</Panel>

			<Panel name="oppfolging" tittel="Oppfølging">
				<OppfolgingPanelInnhold />
			</Panel>

			<Panel name="jobbsokerkompetanse" tittel="Jobbsøkerkompetanse">
				<JobbsokerkompetansePanel />
			</Panel>
		</div>
	);
};
