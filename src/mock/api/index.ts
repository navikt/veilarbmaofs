import { RequestHandler } from 'msw';
import { frontendloggerHandlers } from './frontendlogger';
import { veilarboppfolgingHandlers } from './veilarboppfolging';
import { veilarbpersonHandlers } from './veilarbperson';
import { veilarbpersonflatefsHandlers } from './veilarbpersonflatefs';
import { veilarbveilederHandlers } from './veilarbveileder';
import { veilarbvedtaksstotteHandlers } from './veilarbvedtaksstotte';

export const allHandlers: RequestHandler[] = [
	...frontendloggerHandlers,
	...veilarboppfolgingHandlers,
	...veilarbpersonHandlers,
	...veilarbpersonflatefsHandlers,
	...veilarbveilederHandlers,
	...veilarbvedtaksstotteHandlers
];
