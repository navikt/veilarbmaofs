import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';
import { frontendloggerHandlers } from './frontendlogger';
import { veilarbjobbsokerkompetanseHandlers } from './veilarbjobbsokerkompetanse';
import { veilarboppfolgingHandlers } from './veilarboppfolging';
import { veilarbpersonHandlers } from './veilarbperson';
import { veilarbpersonflatefsHandlers } from './veilarbpersonflatefs';
import { veilarbveilederHandlers } from './veilarbveileder';
import { veilarbvedtaksstotteHandlers } from './veilarbvedtaksstotte';

export const allHandlers: RequestHandlersList = [
	...frontendloggerHandlers,
	...veilarbjobbsokerkompetanseHandlers,
	...veilarboppfolgingHandlers,
	...veilarbpersonHandlers,
	...veilarbpersonflatefsHandlers,
	...veilarbveilederHandlers,
	...veilarbvedtaksstotteHandlers
];
