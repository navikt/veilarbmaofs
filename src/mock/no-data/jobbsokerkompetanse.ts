// tslint:disable object-literal-sort-keys
import { JSONValue } from 'yet-another-fetch-mock';
import { KartleggingData } from '../../app/datatyper/kartlegging';

const jobbsokerkompetanse: KartleggingData & JSONValue = {
    underOppfolging: false,
    oppsummering: null,
    oppsummeringKey: null,
    besvarelseDato: '2018-06-05T14:45:06.282+02:00',
    raad: [],
    besvarelse: [],
    kulepunkter: []
};

export default jobbsokerkompetanse;
