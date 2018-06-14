import FetchMock, {Middleware} from "yet-another-fetch-mock";
import CV from './cv';
import Oppfolgingsstatus from "./oppfolgingsstatus";
import Personalia from "./personalia";
import Ytelsestatus from "./ytelsestatus";

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
    middleware: loggingMiddleware
});

mock.get('/veilarbperson/api/person/:fnr', Personalia);
mock.get('/veilarbarena/api', { ytelser: 'DAGP' });
// mock.get('/https://app-t5.adeo.no/pam-arena/rest/arenaperson/hent?fnr=10108000398', CV as JSONValue);
mock.get('/pam-arena', CV);
mock.get('/veilarboppfolging/api/person/oppfolging/:fnr/Oppfolgingsstatus', Oppfolgingsstatus);
mock.get('/arena/api/pagaendeytelser/ytelsestatus', Ytelsestatus);
