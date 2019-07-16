import React from 'react';
import YtelserPanel from './ytelser/ytelser-panel';
import RegistreringPanel from './registrering/registrering-panel';
import CvPanel from './cv/cv-panel';
import JobbprofilPanel from './jobbprofil/jobbprofil-panel';
import PersonaliaPanel from './personalia/personalia-panel';
import OppfolgingPanel from './oppfolging/oppfolging-panel';
import JobbsokerkompetansePanel from './jobbsokerkompetanse/jobbsokerkompetanse-panel';
import './paneler.less';

export const Paneler = () => {
    return (
        <div className="paneler">
            <RegistreringPanel/>
            <CvPanel/>
            <JobbprofilPanel/>
            <PersonaliaPanel/>
            <YtelserPanel/>
            <OppfolgingPanel/>
            <JobbsokerkompetansePanel/>
        </div>
    );
};
