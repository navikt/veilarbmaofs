import { RequestHandler } from 'msw';
import { rest } from 'msw';
import { Hovedmal, Siste14aVedtak, Innsatsgruppe } from '../../rest/datatyper/siste14aVedtak';

const siste14aVedtak: Siste14aVedtak = {
	innsatsgruppe: Innsatsgruppe.STANDARD_INNSATS,
	hovedmal: Hovedmal.BEHOLDE_ARBEID
};

const tilhorerBrukerUtrulletKontor = false;

export const veilarbvedtaksstotteHandlers: RequestHandler[] = [
	rest.get('/veilarbvedtaksstotte/api/siste-14a-vedtak', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(siste14aVedtak));
	}),

	rest.get('/veilarbvedtaksstotte/api/utrulling/tilhorerBrukerUtrulletKontor', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(tilhorerBrukerUtrulletKontor));
	})
];
