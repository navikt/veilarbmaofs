import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';
import { rest } from 'msw';
import { Hovedmal, Innsatsbehov, Innsatsgruppe } from '../../rest/datatyper/innsatsbehov';

const innsatsbehov: Innsatsbehov = {
	innsatsgruppe: Innsatsgruppe.STANDARD_INNSATS,
	hovedmal: Hovedmal.BEHOLDE_ARBEID
};

export const veilarbvedtaksstotteHandlers: RequestHandlersList = [
	rest.get('/veilarbvedtaksstotte/api/innsatsbehov', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(innsatsbehov));
	}),
];

