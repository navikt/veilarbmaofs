import FetchMock, { HandlerArgument, Middleware, MiddlewareUtils } from 'yet-another-fetch-mock';
import {
    CV, Features,
    Jobbsokerkompetanse,
    Oppfolgingsstatus,
    Personalia,
    Registering,
    veileder,
    Ytelsestatus
} from './standard';

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

mock.get('/pam-cv-api/rest/v1/arbeidssoker/:fnr', CV);
mock.get('/veilarbveileder/api/veileder/:veilederId',
    (handler: HandlerArgument) => veileder(handler.pathParams.veilederId));
mock.get('/veilarbperson/api/person/:fnr', Personalia);
mock.get('/veilarboppfolging/api/person/:fnr/oppfolgingsstatus', Oppfolgingsstatus);
mock.get('/veilarbjobbsokerkompetanse/api/hent', Jobbsokerkompetanse);
mock.get('/veilarboppfolging/api/person/:fnr/ytelser', Ytelsestatus);
mock.get('/veilarbregistrering/api/registrering', Registering);
mock.get('/veilarbpersonflatefs/api/feature', Features);
