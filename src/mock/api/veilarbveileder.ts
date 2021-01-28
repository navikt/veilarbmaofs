import { rest } from 'msw';
import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';
import { VeilederData } from '../../rest/datatyper/veileder';

const veileder: VeilederData = {
	etternavn: 'Destructor',
	fornavn: 'The',
	ident: 'Z123456',
	navn: 'The Destructor'
};

export const veilarbveilederHandlers: RequestHandlersList = [
	rest.get('/veilarbveileder/api/veileder/:veilederId', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(veileder));
	})
];
