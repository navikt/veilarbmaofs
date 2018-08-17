// tslint:disable object-literal-sort-keys
import {JSONValue} from "yet-another-fetch-mock";
import {OppfolgingData} from "../../app/datatyper/oppfolging";

const oppfolingstatus: OppfolgingData & JSONValue = {
    oppfolgingsenhet: {
        navn: "NAV TestHeim",
        enhetId: "007"
    },
    veilederId: "Z123456",
    formidlingsgruppe: 'ARBS',
    servicegruppe: 'BKART'
};
export default oppfolingstatus
