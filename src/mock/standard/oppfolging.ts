// tslint:disable object-literal-sort-keys
import { JSONValue } from 'yet-another-fetch-mock';
import { OppfolgingData } from '../../app/datatyper/oppfolgingData';

const oppfolging: OppfolgingData & JSONValue = {
    erManuell: true,
    underOppfolging: false,
};
export default oppfolging;
