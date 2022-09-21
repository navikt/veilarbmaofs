import { RequestHandler } from 'msw';
import { rest } from 'msw';
import { Hovedmal, Innsatsbehov, Innsatsgruppe } from '../../rest/datatyper/innsatsbehov';

const innsatsbehov: Innsatsbehov = {
	innsatsgruppe: Innsatsgruppe.STANDARD_INNSATS,
	hovedmal: Hovedmal.BEHOLDE_ARBEID
};

const tilhorerBrukerUtrulletKontor = false;

export const veilarbvedtaksstotteHandlers: RequestHandler[] = [
	rest.get('/veilarbvedtaksstotte/api/innsatsbehov', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(innsatsbehov));
	}),

	rest.get('/veilarbvedtaksstotte/api/utrulling/tilhorerBrukerUtrulletKontor', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(tilhorerBrukerUtrulletKontor));
	})
];
