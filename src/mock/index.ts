import FetchMock, { MiddlewareUtils } from 'yet-another-fetch-mock';
import {
    aktorIdMock,
    cvMock, featuresMock,
    jobbsokerkompetanseMock, oppfolgingMock,
    oppfolgingsstatusMock,
    personaliaMock, registeringMock,
    veilederMock,
    ytelsestatusMock
} from './data';

// Use this when you need to mock different status codes
// const failureMock = FetchMock.configure({
//     enableFallback: false,
//     middleware: MiddlewareUtils.combine(
//         MiddlewareUtils.failurerateMiddleware(1, { status: 403 }),
//         MiddlewareUtils.delayMiddleware(404),
//         MiddlewareUtils.loggingMiddleware()
//     )
// });

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(500),
        MiddlewareUtils.loggingMiddleware()
    )
});

mock.get('/pam-cv-api/rest/v1/arbeidssoker/:fnr', cvMock);
mock.get('/veilarbveileder/api/veileder/:veilederId', veilederMock);
mock.get('/veilarbperson/api/person/aktorid', aktorIdMock);
mock.get('/veilarbperson/api/person/:fnr', personaliaMock);
mock.get('/veilarboppfolging/api/person/:fnr/oppfolgingsstatus', oppfolgingsstatusMock);
mock.get('/veilarbjobbsokerkompetanse/api/hent', jobbsokerkompetanseMock);
mock.get('/veilarboppfolging/api/person/:fnr/ytelser', ytelsestatusMock);
mock.get('/veilarboppfolging/api/underoppfolging', oppfolgingMock);
mock.get('/veilarbregistrering/api/registrering', registeringMock);
mock.get('/veilarbpersonflatefs/api/feature', featuresMock);
