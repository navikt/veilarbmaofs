import { rest } from 'msw';
import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';

export const frontendloggerHandlers: RequestHandlersList = [
	rest.post('/frontendlogger/api/*', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.status(200));
	})
];
