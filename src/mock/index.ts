import FetchMock, { MiddlewareUtils } from 'yet-another-fetch-mock';
import {
	aktorIdMock,
	cvMock,
	featuresMock,
	jobbsokerkompetanseMock,
	oppfolgingMock,
	oppfolgingsstatusMock,
	personaliaMock,
	registeringMock,
	veilederMock,
	ytelsestatusMock,
	personaliav2Mock,
} from './data';

const mock = FetchMock.configure({
	enableFallback: true,
	middleware: MiddlewareUtils.combine(MiddlewareUtils.delayMiddleware(500), MiddlewareUtils.loggingMiddleware())
});

mock.get('/veilarbperson/api/person/cv_jobbprofil', cvMock);
mock.get('/veilarbveileder/api/veileder/:veilederId', veilederMock);
mock.get('/veilarbperson/api/person/aktorid', aktorIdMock);
mock.get('/veilarbperson/api/person/:fnr', personaliaMock);
mock.get('/veilarbperson/api/v2/person/:fnr', personaliav2Mock);
mock.get('/veilarboppfolging/api/person/:fnr/oppfolgingsstatus', oppfolgingsstatusMock);
mock.get('/veilarbjobbsokerkompetanse/api/hent', jobbsokerkompetanseMock);
mock.get('/veilarboppfolging/api/person/:fnr/ytelser', ytelsestatusMock);
mock.get('/veilarboppfolging/api/underoppfolging', oppfolgingMock);
mock.get('/veilarbregistrering/api/registrering', registeringMock);
mock.get('/veilarbpersonflatefs/api/feature', featuresMock);
