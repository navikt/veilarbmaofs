// tslint:disable object-literal-sort-keys
import { JSONValue } from 'yet-another-fetch-mock';
import { OppfolgingData } from '../../app/datatyper/oppfolgingData';

const oppfolging: OppfolgingData & JSONValue = {
    fnr: '123456',
    veilederId: 'Z007',
    reservasjonKRR: false,
    manuell: true,
    underOppfolging: true,
    underKvp: false,
    oppfolgingUtgang: null,
    gjeldendeEskaleringsvarsel: null,
    kanStarteOppfolging: false,
    avslutningStatus: null,
    oppfolgingsPerioder: [],
    harSkriveTilgang: true,
    inaktivIArena: true,
    kanReaktiveres: false,
    inaktiveringsdato: null,
    erSykmeldtMedArbeidsgiver: false,
    erIkkeArbeidssokerUtenOppfolging: false
};
export default oppfolging;
