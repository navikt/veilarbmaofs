// tslint:disable object-literal-sort-keys
import {JSONValue} from "yet-another-fetch-mock";
import {VeilederData} from "../../app/datatyper/veileder";

export default function veileder(veilederId: string): VeilederData & JSONValue {
    return {
        "etternavn" : "Destructor",
        "fornavn" : "The",
        "ident" : veilederId,
        "navn" : "The Destructor"
    };
}
