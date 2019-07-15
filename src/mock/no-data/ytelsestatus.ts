// tslint:disable object-literal-sort-keys
import { JSONValue } from 'yet-another-fetch-mock';
import { YtelseDataType } from '../../rest/datatyper/ytelse';

const ytelsestatus: YtelseDataType & JSONValue = {
    oppfolgingskontrakter: [],
    vedtaksliste: [{
            aktivitetsfase: null,
            fradato: {
                day: '19',
                month: '2',
                year: '2018',
            },
            status: null,
            tildato: null,
            vedtakstype: null
        }]
};

export default ytelsestatus;
