// tslint:disable object-literal-sort-keys
import { JSONValue } from 'yet-another-fetch-mock';
import { OppfolgingData } from '../../rest/datatyper/oppfolgingData';

const oppfolging: OppfolgingData & JSONValue = {
    erManuell: true,
    underOppfolging: true,
};
export default oppfolging;
