import React from 'react';
import RegistreringPanel from './innhold/registrering/registrering-panel-innhold';
import CvPanel from './innhold/cv/cv-panel-innhold';
import JobbprofilPanelInnhold from './innhold/jobbprofil/jobbprofil-panel-innhold';
import OppfolgingPanelInnhold from './innhold/oppfolging/oppfolging-panel-innhold';
import JobbsokerkompetansePanel from './innhold/jobbsokerkompetanse/jobbsokerkompetanse-panel-innhold';
import './paneler.less';
import Panel from './panel';
import YtelserPanelInnhold from './innhold/ytelser/ytelser-panel-innhold';
import PersonaliaPanelInnhold from './innhold/personalia/personalia-panel-innhold';

export const Paneler = () => {
    return (
        <div className="paneler">
            <Panel name="registrering" tittel="Registrering">
                <RegistreringPanel/>
            </Panel>

            <Panel name="cv" tittel="CV">
                <CvPanel/>
            </Panel>

            <Panel name="jobbprofil" tittel="Jobbprofil">
                <JobbprofilPanelInnhold/>
            </Panel>

            <Panel name="personalia" tittel="Personalia">
                <PersonaliaPanelInnhold/>
            </Panel>

            <Panel name="ytelser" tittel="Ytelser">
                <YtelserPanelInnhold/>
            </Panel>

            <Panel name="oppfolging" tittel="Oppfølging">
                <OppfolgingPanelInnhold/>
            </Panel>

            <Panel name="jobbsokerkompetanse" tittel="Jobbsøkerkompetanse">
                <JobbsokerkompetansePanel/>
            </Panel>
        </div>
    );
};
