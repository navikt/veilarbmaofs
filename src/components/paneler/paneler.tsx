import React from 'react';
import RegistreringPanel from './innhold/registrering/registrering-panel-innhold';
import CvPanel from './innhold/cv/cv-panel-innhold';
import JobbprofilPanelInnhold from './innhold/jobbprofil/jobbprofil-panel-innhold';
import OppfolgingPanelInnhold from './innhold/oppfolging/oppfolging-panel-innhold';
import JobbsokerkompetansePanel from './innhold/jobbsokerkompetanse/jobbsokerkompetanse-panel-innhold';
import Panel from './panel';
import YtelserPanelInnhold from './innhold/ytelser/ytelser-panel-innhold';
import PersonaliaPanelInnhold from './innhold/personalia/personalia-panel-innhold';
import { useFetchOppfolgingsstatus } from '../../rest/api';
import { useAppStore } from '../../stores/app-store';
import { erBrukerSykmeldt } from '../../utils/arena-status-utils';
import { hasData } from '../../rest/utils';
import './paneler.less';
import { TagView } from '../views/tag-view';

export const Paneler = () => {
	const { fnr } = useAppStore();
	const oppfolgingstatus = useFetchOppfolgingsstatus(fnr);
	const registreringPanelNavn =
		hasData(oppfolgingstatus) && erBrukerSykmeldt(oppfolgingstatus.data)
			? 'Registrering fra sykefravær'
			: 'Registrering';

	return (
		<div className="paneler">
			<Panel name="registrering" tittel={registreringPanelNavn}>
				<RegistreringPanel />
			</Panel>

			<Panel name="cv" tittel="CV">
				<CvPanel />
			</Panel>

			<Panel name="jobbprofil" tittel="Jobbprofil">
				<JobbprofilPanelInnhold />
			</Panel>

			<Panel name="personalia" tittel="Personalia">
				<PersonaliaPanelInnhold />
			</Panel>

			<Panel name="ytelser" tittel="Ytelser">
				<YtelserPanelInnhold />
			</Panel>

			<Panel name="oppfolging" tittel="Oppfølging">
				<OppfolgingPanelInnhold />
			</Panel>

			<Panel name="jobbsokerkompetanse" tittel="Jobbsøkerkompetanse">
				<JobbsokerkompetansePanel />
			</Panel>

			<Panel name="tag-integrasjon" tittel="Tag integrasjon">
				<TagView />
			</Panel>
		</div>
	);
};
