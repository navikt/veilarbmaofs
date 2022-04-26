import React from 'react';
import RegistreringPanel from './innhold/registrering/registrering-panel-innhold';
import CvPanel from './innhold/cv/cv-panel-innhold';
import JobbprofilPanelInnhold from './innhold/jobbprofil/jobbprofil-panel-innhold';
import OppfolgingPanelInnhold from './innhold/oppfolging/oppfolging-panel-innhold';
import Panel from './panel';
import YtelserPanelInnhold from './innhold/ytelser/ytelser-panel-innhold';
import PersonaliaV2PanelInnhold from './innhold/personaliaV2/personaliav2-panel-innhold';
import { fetchOppfolgingsstatus } from '../../rest/api';
import { erBrukerSykmeldt } from '../../utils/arena-status-utils';
import { hasHashParam, hasQueryParam } from '../../utils';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';
import './paneler.less';
import { sidemenyElementId } from '../../utils/sidemeny';
import { useAppStore } from '../../stores/app-store';
import { isResolved, usePromise } from '../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { OppfolgingsstatusData } from '../../rest/datatyper/oppfolgingsstatus';

export const Paneler: React.FC = () => {
	const { fnr, isSidemenyElementOpen, features } = useAppStore();
	const oppfolgingstatus = usePromise<AxiosResponse<OppfolgingsstatusData>>(() => fetchOppfolgingsstatus(fnr));
	const apneRegistrering = hasQueryParam('visRegistreringDetaljer') || hasHashParam('apneRegistrering');
	const apneTilrettelegging = hasHashParam('apneTilretteleggingsbehov');
	const registreringPanelNavn =
		isResolved(oppfolgingstatus) && erBrukerSykmeldt(oppfolgingstatus.result.data)
			? 'Registrering fra sykefravær'
			: 'Registrering';

	return (
		<section className="paneler-container">
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
					key={`panel-${sidemenyElementId.personaliaFraPdl}`}
					name="personaliaFraPdl"
					id={sidemenyElementId.personaliaFraPdl}
					tittel="Personalia"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.personaliaFraPdl)}
				>
					<PersonaliaV2PanelInnhold />
				</Panel>

				<Panel
					key={`panel-${sidemenyElementId.jobbonsker}`}
					name="jobbonsker"
					id={sidemenyElementId.jobbonsker}
					tittel="Jobbønsker"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.jobbonsker)}
				>
					<JobbprofilPanelInnhold />
				</Panel>

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
					key={`panel-${sidemenyElementId.ytelser}`}
					name="ytelser"
					id={sidemenyElementId.ytelser}
					tittel="Ytelser"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.ytelser)}
				>
					<YtelserPanelInnhold />
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
			</div>
		</section>
	);
};
