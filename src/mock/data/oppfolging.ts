import { JSONValue } from 'yet-another-fetch-mock';
import { UnderOppfolgingData } from '../../rest/datatyper/underOppfolgingData';

const oppfolging: UnderOppfolgingData & JSONValue = {
	erManuell: true,
	underOppfolging: true
};

export default oppfolging;
