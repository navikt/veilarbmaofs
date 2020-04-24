import { JSONArray } from 'yet-another-fetch-mock';

const situasjonHistorikk: JSONArray = [
	{
		opprettet: '2020-04-22 10:18:43.992637',
		endretAvType: 'BRUKER',
		endretAvId: '12345678901',
		svarId: 'SKAL_I_JOBB',
		svarTekst: 'Arbeidsgiver har gitt beskjed om når jeg skal tilbake på jobb'
	},
	{
		opprettet: '2020-04-11 09:42:11.982651',
		endretAvType: 'BRUKER',
		endretAvId: '12345678901',
		svarId: 'PERMITTERT_MED_MIDLERTIDIG_JOBB',
		svarTekst: 'Er fortsatt permittert, men har en annen midlertidig jobb'
	},
	{
		opprettet: '2020-03-26 11:33:51.431962',
		endretAvType: 'BRUKER',
		endretAvId: '12345678901',
		svarId: 'PERMITTERT',
		svarTekst: 'Er permittert eller kommer til å bli permittert'
	}
];

export default situasjonHistorikk;
