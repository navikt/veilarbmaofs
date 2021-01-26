import {
	createFrontendLogger,
	createMockFrontendLogger,
	DEFAULT_FRONTENDLOGGER_API_URL
} from '@navikt/frontendlogger/lib';

const APP_NAME = 'veilarbmaofs';

export const logger = process.env.REACT_APP_DEV
	? createMockFrontendLogger(APP_NAME)
	: createFrontendLogger(APP_NAME, DEFAULT_FRONTENDLOGGER_API_URL);

export const logError = (fields?: {}, tags?: {}): void => {
	logger.event(`${APP_NAME}.error`, fields, tags);
};

export const logMetrikk = (metrikkNavn: string, fields?: {}, tags?: {}): void => {
	logger.event(`${APP_NAME}.metrikker.${metrikkNavn}`, fields, tags);
};
