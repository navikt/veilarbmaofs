import { Features, PERSONALIA_DATA_FRA_PDL } from '../../rest/datatyper/feature';
import { JSONObject } from 'yet-another-fetch-mock';

const features: Features & JSONObject = {
	[PERSONALIA_DATA_FRA_PDL]: false,
};

export default features;
