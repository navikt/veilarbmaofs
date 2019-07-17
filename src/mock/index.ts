import FetchMock, { Middleware, MiddlewareUtils } from 'yet-another-fetch-mock';
import {
    aktorIdMock,
    cvMock, featuresMock,
    jobbsokerkompetanseMock, oppfolgingMock,
    oppfolgingsstatusMock,
    personaliaMock, registeringMock,
    veilederMock,
    ytelsestatusMock
} from './data';

const loggingMiddleware: Middleware = (request, response) => {
    // tslint:disable
    console.groupCollapsed(request.url);
    console.groupCollapsed('config');
    console.log('url', request.url);
    console.log('queryParams', request.queryParams);
    console.log('pathParams', request.pathParams);
    console.log('body', request.body);
    console.groupEnd();

    try {
        console.log('response', JSON.parse(response.body));
    } catch (e) {
        console.log('response', response);
    }

    console.groupEnd();
    // tslint:enable
    return response;
};

// Use this when you need to mock different status codes
// const failureMock = FetchMock.configure({
//     enableFallback: false,
//     middleware: MiddlewareUtils.combine(
//         MiddlewareUtils.failurerateMiddleware(1, { status: 204 }),
//         MiddlewareUtils.delayMiddleware(500),
//         loggingMiddleware
//     )
// });

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(500),
        loggingMiddleware
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
