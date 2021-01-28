import { rest } from 'msw';
import { UnderOppfolgingData } from '../../rest/datatyper/underOppfolgingData';
import { OppfolgingsstatusData } from '../../rest/datatyper/oppfolgingsstatus';
import { YtelseData } from '../../rest/datatyper/ytelse';
import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';

const oppfolging: UnderOppfolgingData = {
	erManuell: true,
	underOppfolging: true
};

const oppfolingstatus: OppfolgingsstatusData = {
	oppfolgingsenhet: {
		navn: 'NAV TestHeim',
		enhetId: '007'
	},
	veilederId: 'Z123456',
	formidlingsgruppe: 'ARBS',
	servicegruppe: 'BKART',
	hovedmaalkode: 'BEHOLDEA'
};

const ytelsestatus: YtelseData = {
	vedtaksliste: [
		{
			aktivitetsfase: 'Under arbeidsavklaring',
			fradato: {
				day: '19',
				month: '2',
				year: '2018'
			},
			status: 'Iverksatt',
			tildato: {
				day: '12',
				month: '10',
				year: '2018'
			},
			vedtakstype: 'Eksamensgebyr / Ny rettighet'
		},
		{
			aktivitetsfase: null,
			fradato: {
				day: '19',
				month: '2',
				year: '2018'
			},
			status: 'Iverksatt',
			tildato: null,
			vedtakstype: 'Arbeidsavklaringspenger / Endring'
		},
		{
			aktivitetsfase: 'Under arbeidsavklaring',
			fradato: {
				day: '19',
				month: '2',
				year: '2018'
			},
			status: 'Avsluttet',
			vedtakstype: 'Arbeidsavklaringspenger / Ny rettighet'
		}
	]
};

export const veilarboppfolgingHandlers: RequestHandlersList = [
	rest.get('/veilarboppfolging/api/person/:fnr/oppfolgingsstatus', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(oppfolingstatus));
	}),
	rest.get('/veilarboppfolging/api/person/:fnr/ytelser', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(ytelsestatus));
	}),
	rest.get('/veilarboppfolging/api/underoppfolging', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(oppfolging));
	})
];
