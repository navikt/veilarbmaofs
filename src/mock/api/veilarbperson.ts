import {rest} from 'msw';
import {RequestHandlersList} from 'msw/lib/types/setupWorker/glossary';
import {ArenaPerson, FagdokumentType, KursVarighetEnhet} from '../../rest/datatyper/arenaperson';
import {PersonaliaInfo} from '../../rest/datatyper/personalia';
import {AktorId} from '../../rest/datatyper/aktor-id';
import {PersonaliaV2Info} from "../../rest/datatyper/personaliav2";
import {VergemaalEllerFullmaktOmfangType, VergeOgFullmaktData, Vergetype} from "../../rest/datatyper/vergeOgFullmakt";

const aktorId: AktorId = {
	aktorId: '1234567'
};

const cvOgJobbprofil: ArenaPerson = {
	sistEndret: '2019-01-15T07:52:35.456+01:00',
	synligForArbeidsgiver: false,
	sammendrag:
		'Jeg er en maritime executive som har master grad og bachlor grad. Har vart teknisk direktor i mange år og flyttet hjem til Norge hvor jeg søker arbeide innenfor then maritime sektor. Har gode referanser og variert seiling og onshore basert arbeid.',
	arbeidserfaring: [
		{
			tittel: 'Maskinsjef',
			arbeidsgiver: 'viola enviromental',
			sted: null,
			beskrivelse: 'Beskrivelse av arbeidserfaring',
			fraDato: '2010-04',
			tilDato: '2017-06'
		}
	],
	fagdokumentasjoner: [
		{
			type: FagdokumentType.MESTERBREV,
			tittel: null
		},
		{
			type: FagdokumentType.SVENNEBREV_FAGBREV,
			tittel: 'Tittelen kommer her'
		}
	],
	utdanning: [
		{
			tittel: 'Andre servicefag, andre, uspesifisert utdanningsgruppe, høyere nivå',
			studiested: 'Pasific University',
			beskrivelse: 'Beskrivelse av utdanning',
			fraDato: '1999-06',
			tilDato: '2003-06'
		},
		{
			tittel: 'Cand.scient.-utdanning, mekanikk',
			studiested: 'Pasific university',
			beskrivelse: null,
			fraDato: '1999-06',
			tilDato: '2003-06'
		},
		{
			tittel: 'Teknisk fagskole, linje for maritime fag og fiskerifag, toårig',
			studiested: 'arendal maritime hoyskole',
			beskrivelse: null,
			fraDato: '1989-06',
			tilDato: '1993-06'
		}
	],
	annenErfaring: [
		{
			rolle: 'maskinsjef steam',
			beskrivelse: 'maskinsjef steam for brovig tank rederi',
			fraDato: '1988-02',
			tilDato: null
		},
		{
			rolle: 'vice presidet ',
			beskrivelse: 'vice presidet  for new england pump and valve',
			fraDato: '2007-08',
			tilDato: '2009-05'
		},
		{
			rolle: 'technical director',
			beskrivelse: 'technical director for cunard cruise line',
			fraDato: '2003-05',
			tilDato: '2007-09'
		},
		{
			rolle: 'technical director',
			beskrivelse: 'technical director for norwegian cruise line',
			fraDato: '2005-07',
			tilDato: '2007-06'
		},
		{
			rolle: 'maskinsjef',
			beskrivelse: 'maskinsjef for crystal cruise',
			fraDato: '1991-04',
			tilDato: '2003-05'
		}
	],
	forerkort: [
		{
			klasse: 'B',
			fraDato: '2017-08-01',
			utloperDato: '2118-12-01'
		}
	],
	kurs: [
		{
			tittel: 'huet',
			arrangor: 'falk',
			fraDato: '2016-10',
			varighet: {
				varighet: 1,
				tidsenhet: KursVarighetEnhet.UKE
			}
		},
		{
			tittel: 'dynamik posisjonering',
			arrangor: 'kongsberg',
			fraDato: '2010-08'
		}
	],
	godkjenninger: [
		{
			tittel: 'Autorisasjon som lege',
			utsteder: null,
			gjennomfortDato: '2018-05',
			utloperDato: '2118-12'
		}
	],
	andreGodkjenninger: [
		{
			tittel: 'Sikkerhetskurs: Diverse spesialkurs',
			utsteder: null,
			gjennomfortDato: '2018-05',
			utloperDato: '2118-12'
		},
		{
			tittel: 'Maskinoffisersertifikat: Klasse 1',
			utsteder: null,
			gjennomfortDato: '2014-12',
			utloperDato: '2118-12'
		},
		{
			tittel: 'Kjelpassersertifikat: Rødt sertifikat',
			utsteder: null,
			gjennomfortDato: '1974-07',
			utloperDato: '2118-12'
		}
	],
	sprak: [
		{
			sprak: 'Dansk',
			muntligNiva: 'Godt',
			skriftligNiva: 'Godt'
		},
		{
			sprak: 'Svensk',
			muntligNiva: 'Godt',
			skriftligNiva: 'Godt'
		},
		{
			sprak: 'Engelsk',
			muntligNiva: 'Godt',
			skriftligNiva: 'Godt'
		},
		{
			sprak: 'Tysk',
			muntligNiva: 'Godt',
			skriftligNiva: 'Godt'
		}
	],
	jobbprofil: {
		sistEndret: '2019-01-15T07:52:35.462+01:00',
		onsketYrke: [],
		onsketArbeidssted: [
			{
				stedsnavn: 'Søgne',
				kode: 'NO10.1018'
			},
			{
				stedsnavn: 'Østfold',
				kode: 'NO01'
			},
			{
				stedsnavn: 'Akershus',
				kode: 'NO02'
			},
			{
				stedsnavn: 'Oslo',
				kode: 'NO03'
			},
			{
				stedsnavn: 'Oppland',
				kode: 'NO05'
			},
			{
				stedsnavn: 'Buskerud',
				kode: 'NO06'
			},
			{
				stedsnavn: 'Vestfold',
				kode: 'NO07'
			},
			{
				stedsnavn: 'Telemark',
				kode: 'NO08'
			},
			{
				stedsnavn: 'Aust-Agder',
				kode: 'NO09'
			},
			{
				stedsnavn: 'Vest-Agder',
				kode: 'NO10'
			},
			{
				stedsnavn: 'Rogaland',
				kode: 'NO11'
			},
			{
				stedsnavn: 'Hordaland',
				kode: 'NO12'
			},
			{
				stedsnavn: 'Sogn og Fjordane',
				kode: 'NO14'
			},
			{
				stedsnavn: 'Møre og Romsdal',
				kode: 'NO15'
			},
			{
				stedsnavn: 'Nordland',
				kode: 'NO18'
			},
			{
				stedsnavn: 'Finnmark',
				kode: 'NO20'
			},
			{
				stedsnavn: 'Øvrige områder',
				kode: 'NO99'
			},
			{
				stedsnavn: 'Trøndelag',
				kode: 'NO50'
			}
		],
		onsketAnsettelsesform: [
			{
				tittel: 'VIKARIAT'
			},
			{
				tittel: 'ENGASJEMENT'
			},
			{
				tittel: 'PROSJEKT'
			},
			{
				tittel: 'FAST'
			},
			{
				tittel: 'SESONG'
			}
		],
		onsketArbeidstidsordning: [
			{
				tittel: 'TURNUS'
			},
			{
				tittel: 'VAKT'
			},
			{
				tittel: 'SKIFT'
			}
		],
		heltidDeltid: {
			heltid: true,
			deltid: false
		},
		kompetanse: []
	}
};

const personalia: PersonaliaInfo = {
	fornavn: 'BRUCE',
	mellomnavn: 'BATTY',
	etternavn: 'WAYNE',
	sammensattNavn: 'BRUCE BATTY WAYNE',
	fodselsnummer: '10108000398',
	fodselsdato: '1974-09-16',
	dodsdato: null,
	barn: [
		{
			fornavn: 'BRUCE',
			mellomnavn: null,
			etternavn: 'BANNER',
			sammensattNavn: 'BRUCE BANNER',
			fodselsnummer: '10108000391',
			fodselsdato: '2016-04-17',
			dodsdato: null,
			harSammeBosted: true,
			kjonn: 'M'
		},
		{
			fornavn: 'HARRY',
			mellomnavn: null,
			etternavn: 'BOSCH',
			sammensattNavn: 'HARRY BOSCH',
			fodselsnummer: '10108000392',
			fodselsdato: '2014-05-24',
			dodsdato: null,
			harSammeBosted: false,
			kjonn: 'M'
		},
		{
			fornavn: 'SATOSHI',
			mellomnavn: null,
			etternavn: 'NAKAMOTO',
			sammensattNavn: 'SATOSHI NAKAMOTO',
			fodselsnummer: '10108000398',
			fodselsdato: '2005-10-04',
			dodsdato: '2010-10-04',
			harSammeBosted: true,
			kjonn: 'K'
		}
	],
	diskresjonskode: '6',
	kontonummer: '12345678910',
	geografiskTilknytning: '0106',
	geografiskEnhet: {
		enhetsnummer: '0106',
		navn: 'NAV Fredrikstad'
	},
	telefon: '+4799999999',
	epost: 'tester.scrambling-script@fellesregistre.no',
	statsborgerskap: 'NORGE',
	sikkerhetstiltak: 'To ansatte i samtale',
	sivilstand: {
		sivilstand: 'Gift',
		fraDato: '2016-08-04'
	},
	partner: null,
	bostedsadresse: {
		strukturertAdresse: {
			Gateadresse: {
				landkode: 'NORGE',
				tilleggsadresse: null,
				postnummer: '1621',
				poststed: 'GRESSVIK',
				husnummer: 2228,
				husbokstav: null,
				kommunenummer: '0106',
				gatenavn: 'GATEVEIEN',
				bolignummer: null,
				gatenummer: null
			}
		}
	},
	midlertidigAdresseNorge: null,
	midlertidigAdresseUtland: null,
	postAdresse: {
		ustrukturertAdresse: {
			adresselinje1: 'DOIDGE',
			adresselinje2: null,
			adresselinje3: null,
			adresselinje4: '4001 STAVANGER',
			landkode: 'NORGE'
		}
	},
	egenAnsatt: true,
	kjonn: 'K'
};

const personaliav2: PersonaliaV2Info = {
	fornavn: 'BRUCE',
	mellomnavn: 'BATTY',
	etternavn: 'WAYNE',
	forkortetNavn: 'BRUCE BATTY WAYNE',
	fodselsnummer: '10108000398',
	fodselsdato: '1974-09-16',
	dodsdato: null,
	barn: [
		{
			fornavn: 'BRUCE',
			mellomnavn: null,
			etternavn: 'BANNER',
			forkortetNavn: 'BRUCE BANNER',
			fodselsnummer: '10108000391',
			fodselsdato: '2016-04-17',
			dodsdato: null,
			harSammeBosted: true,
			kjonn: 'M'
		},
		{
			fornavn: 'HARRY',
			mellomnavn: null,
			etternavn: 'BOSCH',
			forkortetNavn: 'HARRY BOSCH',
			fodselsnummer: '10108000392',
			fodselsdato: '2014-05-24',
			dodsdato: null,
			harSammeBosted: false,
			kjonn: 'M'
		},
		{
			fornavn: 'SATOSHI',
			mellomnavn: null,
			etternavn: 'NAKAMOTO',
			forkortetNavn: 'SATOSHI NAKAMOTO',
			fodselsnummer: '10108000398',
			fodselsdato: '2005-10-04',
			dodsdato: '2010-10-04',
			harSammeBosted: true,
			kjonn: 'K'
		}
	],
	kontonummer: '12345678911',
	geografiskEnhet: {
		enhetsnummer: '0106',
		navn: 'NAV Fredrikstad'
	},
	telefon: [
		{
			prioritet: '1',
			telefonNr: '+4633333333',
			master: 'FREG'
		},
		{
			prioritet: '2',
			telefonNr: '+4822222222',
			master: 'KRR'
		}],
	epost: 'tester.scrambling-script@fellesregistre.no',
	statsborgerskap: 'NORGE',
	sivilstand: {
		sivilstand: 'Gift',
		fraDato: '2016-08-04'
	},
	partner: {
		fornavn: 'PHILIPS',
		mellomnavn: null,
		etternavn: 'WAYNE',
		forkortetNavn: 'PHILIPS WAYNE',
		fodselsnummer: '12108000391',
		fodselsdato: '1980-12-10',
		dodsdato: null,
		harSammeBosted: true,
		kjonn: 'M'
	},
	bostedsadresse: {
		coAdressenavn: 'COADRDRESSENAVN',
		vegadresse: {
			matrikkelId: null,
			postnummer: '0000',
			husnummer: '21',
			husbokstav: 'A',
			kommunenummer: '1111',
			adressenavn: 'ARENDALSGATE',
			tilleggsnavn: 'ARENDAL',
			poststed: 'POSTSTED',
			kommune: 'KOMMUNE'
		},
		matrikkeladresse: null,
		utenlandskAdresse: null,
		ukjentBosted: null
	},
	oppholdsadresse: {
		coAdressenavn: null,
		vegadresse: {
			matrikkelId: null,
			postnummer: null,
			husnummer: null,
			husbokstav: null,
			kommunenummer: '1111',
			adressenavn: 'UTEN FAST BOSTED',
			tilleggsnavn: null,
			poststed: null,
			kommune: 'KOMMUNE'
		},
		matrikkeladresse: {
			matrikkelId: null,
			bruksenhetsnummer: 'H0203',
			tilleggsnavn: null,
			kommunenummer: '1234',
			postnummer: '0457',
			poststed: 'POSTSTED',
			kommune: 'AGDER'
		},
		utenlandskAdresse: null
	},
	kontaktadresser: [
		{
			type: 'Innland',
			coAdressenavn: null,
			vegadresse: null,
			postboksadresse: null,
			postadresseIFrittFormat: {
				adresselinje1: 'C/O Egent Test',
				adresselinje2: 'Adresselinje 2',
				adresselinje3: 'Adresselinje 3',
				postnummer: '7123',
				poststed: 'POSTSTED'
			},
			utenlandskAdresse: null,
			utenlandskAdresseIFrittFormat: null
		},
		{
			type: 'Utland',
			coAdressenavn: null,
			vegadresse: null,
			postboksadresse: null,
			postadresseIFrittFormat: null,
			utenlandskAdresse: null,
			utenlandskAdresseIFrittFormat: {
				adresselinje1: 'C/O adresse2 Test',
				adresselinje2: 'Adresselinje 2',
				adresselinje3: 'Adresselinje 3',
				byEllerStedsnavn: 'STEDSNAVN',
				postkode: '1234',
				landkode: 'LANDKODE'
			}
		}
	],
	kjonn: 'K'
};

const mockVergeOgFullmakt: VergeOgFullmaktData = {
	vergeEllerFremtidsfullmakt: [
		{
			type: Vergetype.MINDREAARIG,
			embete: 'Fylkesmannen i Agder',
			vergeEllerFullmektig: {
				navn: {
					fornavn: 'fornavn',
					mellomnavn: 'mellomnavn',
					etternavn: 'etternavn'
				},
				motpartsPersonident: '1234567890',
				omfang: VergemaalEllerFullmaktOmfangType.OEKONOMISKE_INTERESSER
			},
			folkeregistermetadata: {
				ajourholdstidspunkt: '2021-03-02T13:00:42',
				gyldighetstidspunkt: null
			}
		},
		{
			type: Vergetype.MIDLERTIDIG_FOR_VOKSEN,
			embete: 'Fylkesmannen i Agder',
			vergeEllerFullmektig: {
				navn: {
					fornavn: 'fornavn',
					mellomnavn: 'mellomnavn',
					etternavn: 'etternavn'
				},
				motpartsPersonident: '1234567890',
				omfang: VergemaalEllerFullmaktOmfangType.PERSONLIGE_INTERESSER
			},
			folkeregistermetadata: {
				ajourholdstidspunkt: '2021-03-02T13:00:42',
				gyldighetstidspunkt: '2021-03-02T13:00:42'
			}
		}
	],
	fullmakt: [
		{
			motpartsPersonident: '1234567890',
			motpartsPersonNavn: {
				fornavn:'OLA',
				mellomnavn:null,
				etternavn:'NORDMANN',
				forkortetNavn:'NORDMANN OLA'
			},
			motpartsRolle: 'FULLMEKTIG',
			omraader: ['AAP', 'DAG'],
			gyldigFraOgMed: '2021-03-02T13:00:42',
			gyldigTilOgMed:	'2021-03-03T13:00:42'
		},
		{
			motpartsPersonident: '1234567891',
			motpartsPersonNavn: {
				fornavn:'fornavn',
				mellomnavn:'mellomnavn',
				etternavn:'etternavn',
				forkortetNavn:'forkortetNavn'
			},
			motpartsRolle: 'FULLMAKTSGIVER',
			omraader: ['AAP', 'AAR'],
			gyldigFraOgMed: '2021-03-04T13:00:42',
			gyldigTilOgMed:	'2021-03-05T13:00:42'
		}
	]
};

export const veilarbpersonHandlers: RequestHandlersList = [
	rest.get('/veilarbperson/api/person/cv_jobbprofil', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(cvOgJobbprofil));
	}),
	rest.get('/veilarbperson/api/person/aktorid', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(aktorId));
	}),
	rest.get('/veilarbperson/api/person/:fnr', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(personalia));
	}),
	rest.get('/veilarbperson/api/v2/person/:fnr', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(personaliav2));
	}),
	rest.get('/veilarbperson/api/v2/person/vergeOgFullmakt/:fnr', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(mockVergeOgFullmakt));
	}),
];
