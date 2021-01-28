import { rest } from 'msw';
import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';

const features = {};

export const veilarbpersonflatefsHandlers: RequestHandlersList = [
	rest.get('/veilarbpersonflatefs/api/feature', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(features));
	})
];
