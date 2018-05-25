import FetchMock from "yet-another-fetch-mock";

const mock = FetchMock.configure({});

mock.get('/veilarbperson/api', { fnr: '10108000398' });
mock.get('/veilarbarena/api', { ytelser: 'DAGP' });