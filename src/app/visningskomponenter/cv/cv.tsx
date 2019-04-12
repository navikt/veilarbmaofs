import * as React from 'react';
import {CVFeilMelding, CVResponse} from '../../datatyper/arenaperson';
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

interface Props {
    data: {
        cv: CVResponse
    };
}

function CV(props: Props) {
    if (props.data.cv === CVFeilMelding.IKKE_UNDER_OPPFOLGING) {
        return (
            <AlertStripeInfoSolid type="info">
                Bruker er ikke under arbeidsrettet oppfølging
            </AlertStripeInfoSolid>
        );
    }

    if (props.data.cv === CVFeilMelding.IKKE_REGISTRERT) {
        return (
            <AlertStripeInfoSolid type="info">
                Denne personen har ikke registrert CV
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
