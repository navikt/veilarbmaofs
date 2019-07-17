import React, { useEffect } from 'react';
import Panel from '../panel';
import { useFetchStoreContext } from '../../../stores/fetch-store';
import { useAppStoreContext } from '../../../stores/app-store';
import { hasData, isNotStarted } from '../../../rest/utils';
import { Laster } from '../../felles/laster';
import { Feilmelding } from '../../felles/feilmelding';
import AlertStripeInfoSolid from 'nav-frontend-alertstriper';
import Lenke from 'nav-frontend-lenker';
import SistEndret from '../../felles/sist-endret';
import EMDASH from '../../../utils/emdash';
import { LastNedCV } from './last-ned-cv';
import { RedigerCV } from './rediger-cv';
import InformasjonsbolkEnkel from '../../felles/informasjonsbolk-enkel';
import Sammendrag from './sammendrag';
import FloatGrid from '../../felles/float-grid';
import Arbeidserfaring from './arbeidserfaring';
import AnnenErfaring from './annen-erfaring';
import Utdanning from './utdanning';
import Kurs from './kurs';
import Sertifikater from './sertifikater';
import Forerkort from './forerkort';
import Sprak from './sprak';
import Fagdokumentasjon from './fagdokumentasjoner';
import { byggPamUrl } from '../../../utils';
import './cv-panel.less';

const CvPanelInnhold = () => {
    const {cvOgJobbprofil, underOppfolging, aktorId} = useFetchStoreContext();
    const {fnr} = useAppStoreContext();

    useEffect(() => {
        if (isNotStarted(cvOgJobbprofil)) {
            cvOgJobbprofil.fetch({fnr});
        }
        if (isNotStarted(underOppfolging)) {
            underOppfolging.fetch({fnr});
        }
        if (isNotStarted(aktorId)) {
            aktorId.fetch({fnr});
        }
    }, []);

    return (
        <Laster avhengigheter={[cvOgJobbprofil, underOppfolging, aktorId]}>
            <Feilmelding avhengigheter={aktorId}>
                {() => {
                    if (!hasData(underOppfolging)) {
                        return (
                            <AlertStripeInfoSolid type="info">
                                Bruker er ikke under arbeidsrettet oppfølging
                            </AlertStripeInfoSolid>
                        );
                    }

                    const erManuell = underOppfolging.data.erManuell;
                    const brukerAktorId = aktorId.data.aktorId;
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
                    } = cvOgJobbprofil.data;

                    const erSynlig = synligForArbeidsgiver != null ? (synligForArbeidsgiver ? 'Ja' : 'Nei') : EMDASH;

                    return (
                        <>
                            <LastNedCV erManuell={erManuell} lastNedCvLenke={lastNedCvUrl}/>
                            <RedigerCV erManuell={erManuell} cvRegistreringsLenke={endreCvUrl}/>
                            <SistEndret sistEndret={sistEndret} onlyYearAndMonth={false} />
                            <InformasjonsbolkEnkel header="Synlig for arbeidsgiver" value={erSynlig}/>
                            <Sammendrag sammendrag={sammendrag} />
                            <FloatGrid columns={2} gap={8}>
                                <Arbeidserfaring arbeidserfaring={arbeidserfaring} />
                                <AnnenErfaring annenErfaring={annenErfaring} />
                                <Utdanning utdanning={utdanning} />
                                <Kurs kurs={kurs} />
                                <Sertifikater sertifikater={sertifikater} />
                                <Forerkort forerkort={forerkort} />
                                <Sprak sprak={sprak} />
                                <Fagdokumentasjon fagdokumentasjoner={fagdokumentasjoner} />
                            </FloatGrid>
                        </>
                    );
                }}
            </Feilmelding>
        </Laster>
    );
};

const CvPanel = () => {
    return (
        <Panel name="cv" tittel="CV">
            <CvPanelInnhold/>
        </Panel>
    );
};

export default CvPanel;
