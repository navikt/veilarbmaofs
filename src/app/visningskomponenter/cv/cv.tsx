import * as React from 'react';
import { CVFeilMelding, CVResponse } from '../../datatyper/arenaperson';
import EMDASH from '../../utils/emdash';
import FloatGrid from '../../utils/float-grid';
import InformasjonsbolkEnkel from '../felles-komponenter/informasjonsbolk-enkel';
import SistEndret from '../felles-komponenter/sist-endret';
import AnnenErfaring from './annen-erfaring';
import Arbeidserfaring from './arbeidserfaring';
import Forerkort from './forerkort';
import Kurs from './kurs';
import Sammendrag from './sammendrag';
import Sertifikater from './sertifikater';
import Sprak from './sprak';
import Utdanning from './utdanning';
import Fagdokumentasjon from './fagdokumentasjoner';
import AlertStripeInfoSolid from 'nav-frontend-alertstriper';
import { finnNaisDomene } from '../../utils/miljo-utils';
import Lenke from 'nav-frontend-lenker';
import { RedigerCV } from './rediger-cv';
import { OppfolgingData } from '../../datatyper/oppfolgingData';
import { Aktorid } from '../../datatyper/aktorid';
import './cv.less';

interface Props {
    data: {
        cv: CVResponse,
        oppfolging: OppfolgingData,
        aktorId: Aktorid
        feature: { 'veilarbmaofs.manuell_cv_registrering': boolean };
    };
}

export function byggPamUrl(aktorId: string, path: string) {
 return `https://pam-cv-veileder${finnNaisDomene()}${path}/${aktorId}`;
}

function CV(props: Props) {

    if (!props.data.oppfolging.underOppfolging) {
        return (
            <AlertStripeInfoSolid type="info">
                Bruker er ikke under arbeidsrettet oppfølging
            </AlertStripeInfoSolid>
        );
    }
    const aktorId = props.data.aktorId.aktorId;
    const cvUrl = byggPamUrl(aktorId || '', 'cv');
    const erManuell = props.data.oppfolging.erManuell;
    const feature = props.data.feature['veilarbmaofs.manuell_cv_registrering'];

    if (!props.data.cv || props.data.cv === CVFeilMelding.IKKE_REGISTRERT) {
        return (
            <AlertStripeInfoSolid type="info">
                Denne personen har ikke registrert CV.{erManuell && aktorId && feature && <Lenke href={cvUrl}>Registrer her</Lenke>}
            </AlertStripeInfoSolid>
        );
    }

    if(props.data.cv === CVFeilMelding.IKKE_TILLGANG) {
        return (
            <AlertStripeInfoSolid type="info">
                Du har ikke tilgang til å se CV for denne brukeren. Årsaker kan være
                <ul>
                    <li>Bruker må informeres om NAVs behandlingsgrunnlag før veileder får tilgang. Be bruker gå inn på nav.no og oppdatere CV'en sin.</li>
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
        synligForArbeidsgiver } = props.data.cv;

    const erSynlig = synligForArbeidsgiver != null ? (synligForArbeidsgiver ? 'Ja' : 'Nei') : EMDASH;

    return (
        <>
            {feature && <RedigerCV erManuell={erManuell} cvRegistreringsLenke={cvUrl}/>}
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
}

export default CV;
