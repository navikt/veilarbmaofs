import FetchMock, {Middleware, MiddlewareUtils} from "yet-another-fetch-mock";
import CV from './cv';
import Oppfolgingsstatus from "./oppfolgingsstatus";
import Personalia from "./personalia";

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
    enableFallback: false,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(1500),
        loggingMiddleware
    )
});

mock.get('/veilarbperson/api/person/:fnr', Personalia);
mock.get('/pam-arena/rest/arenaperson/hentForFnr', CV);
mock.get('/veilarboppfolging/api/person/oppfolging/:fnr/Oppfolgingsstatus', Oppfolgingsstatus);

