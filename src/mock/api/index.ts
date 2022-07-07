import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';
import { veilarboppfolgingHandlers } from './veilarboppfolging';
import { veilarbpersonHandlers } from './veilarbperson';
import { veilarbpersonflatefsHandlers } from './veilarbpersonflatefs';
import { veilarbveilederHandlers } from './veilarbveileder';
import { veilarbvedtaksstotteHandlers } from './veilarbvedtaksstotte';

export const allHandlers: RequestHandlersList = [
	...veilarboppfolgingHandlers,
	...veilarbpersonHandlers,
	...veilarbpersonflatefsHandlers,
	...veilarbveilederHandlers,
	...veilarbvedtaksstotteHandlers
];
