// tslint:disable object-literal-sort-keys
import { JSONValue } from 'yet-another-fetch-mock';
import { YtelseDataType } from '../../rest/datatyper/ytelse';

const ytelsestatus: YtelseDataType & JSONValue = {
    oppfolgingskontrakter:
        [{
            innsatsgrupper: ['Spesielt tilpasset innsats'],
            status: 'Aktiv',
        },
            {
                innsatsgrupper: ['Spesielt tilpasset innsats'],
                status: 'Lukket',
            }],
    vedtaksliste:
        [{
            aktivitetsfase: 'Under arbeidsavklaring',
            fradato: {
                day: '19',
                month: '2',
                year: '2018',
            },
            status: 'Iverksatt',
            tildato: {
                day: '12',
                month: '10',
                year: '2018'
            },
            vedtakstype: 'Eksamensgebyr / Ny rettighet'
        }, {
            aktivitetsfase: null,
            fradato: {
                day: '19',
                month: '2',
                year: '2018',
            },
            status: 'Iverksatt',
            tildato: null,
            vedtakstype: 'Arbeidsavklaringspenger / Endring'
        }, {
            aktivitetsfase: 'Under arbeidsavklaring',
            fradato: {
                day: '19',
                month: '2',
                year: '2018',
            },
            status: 'Avsluttet',
            vedtakstype: 'Arbeidsavklaringspenger / Ny rettighet'
        }]
};

export default ytelsestatus;
