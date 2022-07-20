import { rest } from 'msw';
import { RequestHandler } from 'msw';

export const frontendloggerHandlers: RequestHandler[] = [
	rest.post('/frontendlogger/api/*', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.status(200));
	})
];
