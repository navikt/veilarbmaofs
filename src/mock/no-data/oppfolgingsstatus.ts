// tslint:disable object-literal-sort-keys
import { JSONValue } from 'yet-another-fetch-mock';
import { OppfolgingsstatusData } from '../../app/datatyper/oppfolgingsstatus';

const oppfolingstatus: OppfolgingsstatusData & JSONValue = {
    oppfolgingsenhet: {
        navn: 'NAV TestHeim',
        enhetId: '007'
    },
    veilederId: 'Z123456',
    formidlingsgruppe: null,
    servicegruppe: null,
    hovedmaalkode: null
};
export default oppfolingstatus;
