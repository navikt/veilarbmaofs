import FetchMock, {Middleware} from "yet-another-fetch-mock";
import CV from './cv';
import oppfolgingsstatus from "./oppfolgingsstatus";
import Personalia from './personalia';

const loggingMiddleware: Middleware = (request, response) => {
    console.log('response', response); // tslint:disable-line
    return response;
};

const mock = FetchMock.configure({ middleware: loggingMiddleware });

mock.get('/veilarbperson/api', Personalia);
mock.get('/veilarbarena/api', { ytelser: 'DAGP' });
// mock.get('/https://app-t5.adeo.no/pam-arena/rest/arenaperson/hent?fnr=10108000398', CV as JSONValue);
mock.get('/pam-arena', CV);
mock.get('/veilarboppfolging/api/person/oppfolging/:fnr/oppfolgingsstatus', oppfolgingsstatus);

