import React from 'react';
import OppfolgingPanelinnhold from './innhold/oppfolging/oppfolging-panel-innhold';
import CvPanelInnhold from './innhold/cv/cv-panel-innhold';
import JobbonskerPanelinnhold from './innhold/jobbonsker/jobbonsker-panel-innhold';
import PersonaliaV2Panelinnhold from './innhold/personaliaV2/personaliav2-panel-innhold';
import RegistreringPanelinnhold from './innhold/registrering/registrering-panel-innhold';
import YtelserPanelinnhold from './innhold/ytelser/ytelser-panel-innhold';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';
import { fetchCvOgJobbonsker, fetchOppfolgingsstatus } from '../../rest/api';
import { erBrukerSykmeldt } from '../../utils/arena-status-utils';
import { hasHashParam, hasQueryParam } from '../../utils';
import { sidemenyElementId } from '../../utils/sidemeny';
import { useAppStore } from '../../stores/app-store';
import { isResolved, useAxiosPromise, usePromise } from '../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { OppfolgingsstatusData } from '../../rest/datatyper/oppfolgingsstatus';
import { Accordion, Tag } from '@navikt/ds-react';
import { ArenaPerson } from '../../rest/datatyper/arenaperson';
import './paneler.less';
import AccordionItemErrorBoundary from './accordion-item-error-boundary';

export const Paneler: React.FC = () => {
	const { fnr, isSidemenyElementOpen } = useAppStore();
	const oppfolgingstatus = usePromise<AxiosResponse<OppfolgingsstatusData>>(() => fetchOppfolgingsstatus(fnr));
	const cvOgJobbonsker = useAxiosPromise<ArenaPerson>(() => fetchCvOgJobbonsker(fnr));
	const apneRegistrering = hasQueryParam('visRegistreringDetaljer') || hasHashParam('apneRegistrering');
	const apneTilrettelegging = hasHashParam('apneTilretteleggingsbehov');
	const registreringPanelNavn =
		isResolved(oppfolgingstatus) && erBrukerSykmeldt(oppfolgingstatus.result.data)
			? 'Registrering fra sykefravær'
			: 'Registrering';

	return (
		<section className="paneler-container">
			<Accordion>
				<AccordionItemErrorBoundary
					name="oppfolging"
					id={sidemenyElementId.oppfolging}
					tittel="Oppfølging"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.oppfolging)}
				>
					<OppfolgingPanelinnhold />
				</AccordionItemErrorBoundary>

				<AccordionItemErrorBoundary
					name="cv"
					id={sidemenyElementId.cv}
					tittel={
						<>
							CV
							{cvOgJobbonsker.result?.data &&
								!(
									<Tag id="cv-tag" variant="warning" size="small">
										Ingen CV registrert
									</Tag>
								)}
						</>
					}
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.cv)}
				>
					<CvPanelInnhold cvJobbonskerPromise={cvOgJobbonsker} />
				</AccordionItemErrorBoundary>

				<AccordionItemErrorBoundary
					name="jobbonsker"
					id={sidemenyElementId.jobbonsker}
					tittel="Jobbønsker"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.jobbonsker)}
				>
					<JobbonskerPanelinnhold />
				</AccordionItemErrorBoundary>

				<AccordionItemErrorBoundary
					name="personalia"
					id={sidemenyElementId.personalia}
					tittel="Personalia"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.personalia)}
				>
					<PersonaliaV2Panelinnhold />
				</AccordionItemErrorBoundary>

				<AccordionItemErrorBoundary
					name="registrering"
					id={sidemenyElementId.registrering}
					tittel={registreringPanelNavn}
					defaultOpen={
						isSidemenyElementOpen(sidemenyElementId.registrering)
							? isSidemenyElementOpen(sidemenyElementId.registrering)
							: apneRegistrering
					}
				>
					<RegistreringPanelinnhold />
				</AccordionItemErrorBoundary>

				<AccordionItemErrorBoundary
					name="ytelser"
					id={sidemenyElementId.ytelser}
					tittel="Ytelser"
					defaultOpen={isSidemenyElementOpen(sidemenyElementId.ytelser)}
				>
					<YtelserPanelinnhold />
				</AccordionItemErrorBoundary>

				<AccordionItemErrorBoundary
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
				</AccordionItemErrorBoundary>
			</Accordion>
		</section>
	);
};
