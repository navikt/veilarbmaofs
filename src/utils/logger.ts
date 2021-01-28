import { createFrontendLogger, DEFAULT_FRONTENDLOGGER_API_URL } from '@navikt/frontendlogger/lib';
import { APP_NAME } from './konstanter';

export const logger = createFrontendLogger(APP_NAME, DEFAULT_FRONTENDLOGGER_API_URL);

export const logError = (fields?: {}, tags?: {}): void => {
	logger.event(`${APP_NAME}.error`, fields, tags);
};

export const logMetrikk = (metrikkNavn: string, fields?: {}, tags?: {}): void => {
	logger.event(`${APP_NAME}.metrikker.${metrikkNavn}`, fields, tags);
};
