import { sendEventTilVeilarbperson } from '../rest/api';

export interface FrontendEvent {
	name: string;
	fields?: {};
	tags?: {};
}

export const logMetrikk = (metrikkNavn: string, fields?: {}, tags?: {}): void => {
	if (process.env.REACT_APP_DEV === 'true') {
		// eslint-disable-next-line no-console
		console.log('Event', metrikkNavn, 'Fields:', fields, 'Tags:', tags);
	} else {
		sendEventTilVeilarbperson({ name: `${metrikkNavn}`, fields, tags });
	}
};
