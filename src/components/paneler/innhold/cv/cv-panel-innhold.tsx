import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import AlertStripeInfoSolid from 'nav-frontend-alertstriper';
import Lenke from 'nav-frontend-lenker';
import SistEndret from '../../../felles/sist-endret';
import EMDASH from '../../../../utils/emdash';
import { LastNedCV } from './last-ned-cv';
import { RedigerCV } from './rediger-cv';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import Sammendrag from './sammendrag';
import FloatGrid from '../../../felles/float-grid';
import Arbeidserfaring from './arbeidserfaring';
import AnnenErfaring from './annen-erfaring';
import Utdanning from './utdanning';
import Kurs from './kurs';
import Sertifikater from './sertifikater';
import Forerkort from './forerkort';
import Sprak from './sprak';
import Fagdokumentasjon from './fagdokumentasjoner';
import { byggPamUrl } from '../../../../utils';
import { useFetchAktorId, useFetchCvOgJobbprofil, useFetchUnderOppfolging } from '../../../../rest/api';
import { Feilmelding, Laster } from '../../../felles/fetch';
import { hasError, isPending } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import './cv-panel-innhold.less';

const CvPanelInnhold = () => {
    const {fnr} = useAppStore();
    const cvOgJobbprofil = useFetchCvOgJobbprofil(fnr);
    const underOppfolging = useFetchUnderOppfolging(fnr);
    const aktorId = useFetchAktorId(fnr);

    if (isPending(cvOgJobbprofil) || isPending(underOppfolging) || isPending(aktorId)) {
        return <Laster/>;
    } else if (hasError(underOppfolging) || hasError(aktorId) || !hasData(underOppfolging) || !hasData(aktorId)) {
        return <Feilmelding/>;
    } else if (!isPending(underOppfolging) && !hasData(underOppfolging)) {
        return (
            <AlertStripeInfoSolid type="info">
                Bruker er ikke under arbeidsrettet oppfølging
            </AlertStripeInfoSolid>
        );
    }

    const underOppfolgingData = underOppfolging.data;
    const aktorIdData = aktorId.data;

    const erManuell = underOppfolgingData.erManuell;
    const brukerAktorId = aktorIdData.aktorId;
    const endreCvUrl = byggPamUrl(brukerAktorId || '', 'cv');
    const lastNedCvUrl = byggPamUrl(brukerAktorId || '', 'cv/pdf');

    if (cvOgJobbprofil.statusCode === 404 || cvOgJobbprofil.statusCode === 204) {
        return (
            <AlertStripeInfoSolid type="info">
                Denne personen har ikke registrert CV.
                {erManuell && aktorId && <Lenke target="_blank" href={endreCvUrl}>Registrer her</Lenke>}
            </AlertStripeInfoSolid>
        );
    } else if (cvOgJobbprofil.statusCode === 403 || cvOgJobbprofil.statusCode === 401) {
        return (
            <AlertStripeInfoSolid type="info">
                Du har ikke tilgang til å se CV for denne brukeren. Årsaker kan være
                <ul>
                    <li>
                        Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang.
                        Be bruker gå inn på nav.no og oppdatere CV'en sin.
                    </li>
                </ul>
            </AlertStripeInfoSolid>
        );
    } else if (!hasData(cvOgJobbprofil)) {
        return <Feilmelding/>;
    }

    const {
        fagdokumentasjoner,
        sammendrag,
        arbeidserfaring,
        annenErfaring,
        utdanning,
        sertifikater,
        forerkort,
        sprak,
        kurs,
        sistEndret,
        synligForArbeidsgiver
    } = cvOgJobbprofil.data;

    const erSynlig = synligForArbeidsgiver != null ? (synligForArbeidsgiver ? 'Ja' : 'Nei') : EMDASH;

    return (
        <>
            <LastNedCV erManuell={erManuell} lastNedCvLenke={lastNedCvUrl}/>
            <RedigerCV erManuell={erManuell} cvRegistreringsLenke={endreCvUrl}/>
            <SistEndret sistEndret={sistEndret} onlyYearAndMonth={false}/>
            <InformasjonsbolkEnkel header="Synlig for arbeidsgiver" value={erSynlig}/>
            <Sammendrag sammendrag={sammendrag}/>
            <FloatGrid columns={2} gap={8}>
                <Arbeidserfaring arbeidserfaring={arbeidserfaring}/>
                <AnnenErfaring annenErfaring={annenErfaring}/>
                <Utdanning utdanning={utdanning}/>
                <Kurs kurs={kurs}/>
                <Sertifikater sertifikater={sertifikater}/>
                <Forerkort forerkort={forerkort}/>
                <Sprak sprak={sprak}/>
                <Fagdokumentasjon fagdokumentasjoner={fagdokumentasjoner}/>
            </FloatGrid>
        </>
    );
};

export default CvPanelInnhold;