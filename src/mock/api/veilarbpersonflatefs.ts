import { rest } from 'msw';
import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';
import {Features, PERSONALIA_DATA_FRA_PDL} from "../../rest/datatyper/feature";

const features: Features = {
	[PERSONALIA_DATA_FRA_PDL]: true,
};

export const veilarbpersonflatefsHandlers: RequestHandlersList = [
	rest.get('/veilarbpersonflatefs/api/feature', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(features));
	})
];
