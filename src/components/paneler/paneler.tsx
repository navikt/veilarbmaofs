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
import { erBrukerSykmeldt } from '../../utils/arena-status-utils';
import { hasData } from '../../rest/utils';
import { hasHashParam, hasQueryParam } from '../../utils';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';
import './paneler.less';
import Show from '../felles/show';
import { PERSONALIA_DATA_FRA_PDL, PERSONALIA_DATA_FRA_TPS } from '../../rest/datatyper/feature';
import { sidemenyElementId } from '../../utils/sidemeny';
import { useAppStore } from '../../stores/app-store';

export const Paneler: React.FC = () => {
	const { fnr, isSidemenyElementOpen } = useAppStore();
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
			<Panel
				key={`panel-${sidemenyElementId.oppfolging}`}
				name="oppfolging"
				id={sidemenyElementId.oppfolging}
				tittel="Oppfølging"
				defaultOpen={isSidemenyElementOpen(sidemenyElementId.oppfolging)}
			>
				<OppfolgingPanelInnhold />
			</Panel>
			<Panel
				key={`panel-${sidemenyElementId.cv}`}
				name="cv"
				id={sidemenyElementId.cv}
				tittel="CV"
				defaultOpen={isSidemenyElementOpen(sidemenyElementId.cv)}
			>
				<CvPanel />
			</Panel>
			<Panel
				key={`panel-${sidemenyElementId.jobbprofil}`}
				name="jobbprofil"
				id={sidemenyElementId.jobbprofil}
				tittel="Jobbprofil"
				defaultOpen={isSidemenyElementOpen(sidemenyElementId.jobbprofil)}
			>
				<JobbprofilPanelInnhold />
			</Panel>

			<Panel
				key={`panel-${sidemenyElementId.tilretteleggingsbehov}`}
				name="tilretteleggingsbehov"
				id={sidemenyElementId.tilretteleggingsbehov}
				tittel="Behov for tilrettelegging"
				defaultOpen={
					isSidemenyElementOpen(sidemenyElementId.tilretteleggingsbehov)
						? isSidemenyElementOpen(sidemenyElementId.tilretteleggingsbehov)
						: apneTilrettelegging
				}
			>
				<TilretteleggingsbehovSpa
					fnr={fnr}
					viewType={TilretteleggingsbehovViewType.VIS_TILRETTELEGGINGSBEHOV}
				/>
			</Panel>

			<Panel
				key={`panel-${sidemenyElementId.ytelser}`}
				name="ytelser"
				id={sidemenyElementId.ytelser}
				tittel="Ytelser"
				defaultOpen={isSidemenyElementOpen(sidemenyElementId.ytelser)}
			>
				<YtelserPanelInnhold />
			</Panel>

			<Show if={hasData(features) && features.data[PERSONALIA_DATA_FRA_TPS]}>
				<Panel
					key={`panel-${sidemenyElementId.personalia}`}
					name="personalia"
					id={sidemenyElementId.personalia}
					tittel="Personalia"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.personalia)}
				>
					<PersonaliaPanelInnhold />
				</Panel>
			</Show>
			<Show if={hasData(features) && features.data[PERSONALIA_DATA_FRA_PDL]}>
				<Panel
					key={`panel-${sidemenyElementId.personaliaFraPdl}`}
					name="personaliaFraPdl"
					id={sidemenyElementId.personaliaFraPdl}
					tittel="Personalia"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.personaliaFraPdl)}
				>
					<PersonaliaV2PanelInnhold />
				</Panel>
			</Show>

			<Panel
				key={`panel-${sidemenyElementId.registrering}`}
				name="registrering"
				id={sidemenyElementId.registrering}
				tittel={registreringPanelNavn}
				defaultOpen={
					isSidemenyElementOpen(sidemenyElementId.registrering)
						? isSidemenyElementOpen(sidemenyElementId.registrering)
						: apneRegistrering
				}
			>
				<RegistreringPanel />
			</Panel>

			<Panel
				key={`panel-${sidemenyElementId.jobbsokerkompetanse}`}
				name="jobbsokerkompetanse"
				id={sidemenyElementId.jobbsokerkompetanse}
				tittel="Jobbsøkerkompetanse"
				defaultOpen={isSidemenyElementOpen(sidemenyElementId.jobbsokerkompetanse)}
			>
				<JobbsokerkompetansePanel />
			</Panel>
		</div>
	);
};
