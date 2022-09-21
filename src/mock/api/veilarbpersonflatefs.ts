import { rest } from 'msw';
import { RequestHandler } from 'msw';
import {
	Features,
	SPOR_OM_TILBAKEMELDING,
	INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE
} from '../../rest/datatyper/feature';

const features: Features = {
	[SPOR_OM_TILBAKEMELDING]: true,
	[INNSATSGRUPPE_OG_HOVEDMAL_FRA_VEDTAKSSTOTTE]: false
};

export const veilarbpersonflatefsHandlers: RequestHandler[] = [
	rest.get('/veilarbpersonflatefs/api/feature', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(features));
	})
];
