import FetchMock, {HandlerArgument, Middleware, MiddlewareUtils} from "yet-another-fetch-mock";
import {
    CV,
    Jobbsokerkompetanse,
    Oppfolgingsstatus,
    Personalia,
    veileder,
    Ytelsestatus
} from './no-data';

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
    } catch (e) {}

    console.groupEnd();
    // tslint:enable
    return response;
};

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(1500),
        loggingMiddleware
    )
});

mock.get('/veilarbveileder/api/veileder/:veilederId',
    (handler:HandlerArgument) => veileder(handler.pathParams.veilederId));
mock.get('/veilarbperson/api/person/:fnr', Personalia);
mock.get('/pam-arena/rest/arenaperson/hentForFnr', CV);
mock.get('/veilarboppfolging/api/person/:fnr/oppfolgingsstatus', Oppfolgingsstatus);
mock.get('/veilarbjobbsokerkompetanse/api/hent', Jobbsokerkompetanse);
mock.get('/veilarboppfolging/api/person/:fnr/ytelser', Ytelsestatus);
