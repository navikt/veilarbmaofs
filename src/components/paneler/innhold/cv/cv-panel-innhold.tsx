import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import { getData } from '../../../../rest/utils';
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
import { Laster, NoData, Feilmelding } from '../../../felles/fetch';
import './cv-panel-innhold.less';

const CvPanelInnhold = () => {
    const {fnr} = useAppStore();
    const cvOgJobbprofil = useFetchCvOgJobbprofil(fnr);
    const underOppfolging = useFetchUnderOppfolging(fnr);
    const aktorId = useFetchAktorId(fnr);

    if (cvOgJobbprofil.isLoading || underOppfolging.isLoading || aktorId.isLoading) {
        return <Laster/>;
    } else if (cvOgJobbprofil.isError || underOppfolging.isError || aktorId.isError) {
        return <Feilmelding/>;
    } else if (!underOppfolging.isLoading && underOppfolging.data.isNothing()) {
        return (
            <AlertStripeInfoSolid type="info">
                Bruker er ikke under arbeidsrettet oppfølging
            </AlertStripeInfoSolid>
        );
    } else if (cvOgJobbprofil.data.isNothing() || underOppfolging.data.isNothing() || aktorId.data.isNothing()) {
        return <NoData/>;
    }

    const cvOgJobbprofilData = getData(cvOgJobbprofil);
    const underOppfolgingData = getData(underOppfolging);
    const aktorIdData = getData(aktorId);

    const erManuell = underOppfolgingData.erManuell;
    const brukerAktorId = aktorIdData.aktorId;
    const endreCvUrl = byggPamUrl(brukerAktorId || '', 'cv');
    const lastNedCvUrl = byggPamUrl(brukerAktorId || '', 'cv/pdf');

    if (cvOgJobbprofil.httpCode === 404 || cvOgJobbprofil.httpCode === 204) {
        return (
            <AlertStripeInfoSolid type="info">
                Denne personen har ikke registrert CV.
                {erManuell && aktorId && <Lenke target="_blank" href={endreCvUrl}>Registrer her</Lenke>}
            </AlertStripeInfoSolid>
        );
    } else if (cvOgJobbprofil.httpCode === 403 || cvOgJobbprofil.httpCode === 401) {
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
    } = cvOgJobbprofilData;

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
