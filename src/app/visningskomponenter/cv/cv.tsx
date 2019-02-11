import * as React from 'react';
import { ArenaPerson } from '../../datatyper/arenaperson';
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

interface Props {
    data: {
        cv: ArenaPerson
    };
}

function CV(props: Props) {
    const { sammendrag, arbeidserfaring, annenErfaring, utdanning, sertifikater, forerkort, sprak, kurs, sistEndret, synligForArbeidsgiver } = props.data.cv;

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
            </FloatGrid>
        </>
    );
}

export default CV;
