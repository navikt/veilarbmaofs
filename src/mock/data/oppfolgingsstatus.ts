import { JSONValue } from 'yet-another-fetch-mock';
import { OppfolgingsstatusData } from '../../rest/datatyper/oppfolgingsstatus';

const oppfolingstatus: OppfolgingsstatusData & JSONValue = {
	oppfolgingsenhet: {
		navn: 'NAV TestHeim',
		enhetId: '007'
	},
	veilederId: 'Z123456',
	formidlingsgruppe: 'ARBS',
	servicegruppe: 'BKART',
	hovedmaalkode: 'BEHOLDEA'
};

export default oppfolingstatus;
