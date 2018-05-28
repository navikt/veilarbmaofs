import FetchMock, {JSONValue, Middleware} from "yet-another-fetch-mock";
import CV from './cv';

const loggingMiddleware: Middleware = (request, response) => {
    console.log('response', response); // tslint:disable-line
    return response;
}

const mock = FetchMock.configure({ middleware: loggingMiddleware });

mock.get('/veilarbperson/api', { fnr: '10108000398' });
mock.get('/veilarbarena/api', { ytelser: 'DAGP' });
mock.get('/https://app-t5.adeo.no/pam-arena/rest/arenaperson/hent?fnr=10108000398', CV as JSONValue);