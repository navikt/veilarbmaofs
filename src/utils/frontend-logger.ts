import { APP_NAME } from './konstanter';

const frontendlogger =  (window as any).frontendlogger;

export const logEvent = (logTag: string, fields?: {}, tags?: {}): void => {
	if (frontendlogger && frontendlogger.event) {
		frontendlogger.event(logTag, fields ? fields : {}, tags ? tags : {});
	} else {
        console.log('Event:', logTag, 'Fields:', fields, 'Tags:', tags); // tslint:disable-line
	}
};

export const logMetrikk = (metrikkNavn: string, fields?: {}, tags?: {}): void => {
	logEvent(`${APP_NAME}.metrikker.${metrikkNavn}`, fields, tags);
};
