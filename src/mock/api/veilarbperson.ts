import { rest } from 'msw';
import { RequestHandlersList } from 'msw/lib/types/setupWorker/glossary';
import { ArenaPerson, FagdokumentType, KursVarighetEnhet } from '../../rest/datatyper/arenaperson';
import { AktorId } from '../../rest/datatyper/aktor-id';
import { Gradering, PersonaliaV2Info, RelasjonsBosted } from '../../rest/datatyper/personaliav2';
import { VergemaalEllerFullmaktOmfangType, VergeOgFullmaktData, Vergetype } from '../../rest/datatyper/vergeOgFullmakt';
import { TilrettelagtKommunikasjonData } from '../../rest/datatyper/tilrettelagtKommunikasjon';
import { RegistreringsData } from '../../rest/datatyper/registreringsData';

const aktorId: AktorId = {
	aktorId: '1234567'
};

const cvOgJobbprofil: ArenaPerson = {
	sistEndret: '2019-01-15T07:52:35.456+01:00',
	sammendrag:
		'Jeg er en maritime executive som har mastergrad og bachlorgrad. Har vært teknisk direktor i mange år og flyttet hjem til Norge hvor jeg søker arbeide innenfor then maritime sektor. Har gode referanser og variert seiling og onshore basert arbeid.',
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
			tidspunkt: '2016-10',
			varighet: {
				varighet: 1,
				tidsenhet: KursVarighetEnhet.UKE
			}
		},
		{
			tittel: 'grønn',
			arrangor: 'falk',
			tidspunkt: '2017-10'
		},
		{
			tittel: 'blå',
			arrangor: 'falk',
			tidspunkt: '2018-10'
		},
		{
			tittel: 'dynamik posisjonering',
			arrangor: 'kongsberg',
			tidspunkt: '2010-08'
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

const personaliav2: PersonaliaV2Info = {
	fornavn: 'Bruce',
	fodselsnummer: '10108000398',
	fodselsdato: '1974-09-16',
	dodsdato: null,
	barn: [
		{
			fornavn: 'Bruce',
			fodselsdato: '2016-04-17',
			harSammeBosted: false,
			gradering: 'Ny gradering fra PDL' as any,
			erEgenAnsatt: false,
			harVeilederTilgang: false,
			dodsdato: null
		},
		{
			fornavn: 'Harry',
			fodselsdato: '2014-05-24',
			harSammeBosted: true,
			gradering: Gradering.UGRADERT,
			erEgenAnsatt: false,
			harVeilederTilgang: false,
			dodsdato: null
		},
		{
			fornavn: 'Satoshi',
			fodselsdato: '2005-10-04',
			harSammeBosted: false,
			erEgenAnsatt: false,
			harVeilederTilgang: true,
			gradering: Gradering.STRENGT_FORTROLIG,
			dodsdato: null
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
			telefonNr: '+4746333333',
			registrertDato: '10.07.2008',
			master: 'FREG'
		},
		{
			prioritet: '2',
			telefonNr: '80022222',
			registrertDato: '10.04.2010',
			master: 'KRR'
		},
		{
			prioritet: '3',
			telefonNr: '44222444',
			registrertDato: null,
			master: 'PDL'
		}
	],
	epost: {
		epostAdresse: 'tester.scrambling@registre.no',
		epostSistOppdatert: '10.04.2010',
		master: 'KRR'
	},
	statsborgerskap: 'NORGE',
	partner: {
		gradering: Gradering.STRENGT_FORTROLIG_UTLAND,
		erEgenAnsatt: true,
		harSammeBosted: true,
		harVeilederTilgang: false
	},
	sivilstandliste: [
		{
			sivilstand: 'Gift',
			fraDato: '2012-08-20',
			skjermet: null,
			gradering: 'RANDOM_KODE' as any,
			relasjonsBosted: RelasjonsBosted.SAMME_BOSTED,
			master: 'Freg',
			registrertDato: null
		},
		{
			sivilstand: 'Separert_partner',
			fraDato: '2019-06-01',
			skjermet: false,
			gradering: 'Ny gradering fra PDL' as any,
			relasjonsBosted: null,
			master: 'PDL',
			registrertDato: '2019-06-15T10:30:44'
		},
		{
			sivilstand: 'Skilt',
			fraDato: '2020-09-03',
			skjermet: true,
			gradering: Gradering.UGRADERT,
			relasjonsBosted: RelasjonsBosted.UKJENT_BOSTED,
			master: 'PDL',
			registrertDato: '2020-09-05T11:30:15'
		}
	],
	bostedsadresse: {
		coAdressenavn: 'CoAdresseNavn',
		vegadresse: {
			matrikkelId: null,
			postnummer: '0000',
			husnummer: '21',
			husbokstav: 'A',
			kommunenummer: '1111',
			adressenavn: 'Arendalsegate',
			tilleggsnavn: 'Arendal',
			poststed: 'Posted',
			kommune: 'Kommune'
		},
		matrikkeladresse: {
			matrikkelId: null,
			bruksenhetsnummer: 'H0101',
			tilleggsnavn: 'Ja',
			kommunenummer: '8008',
			postnummer: '1337',
			poststed: 'Sandvika',
			kommune: 'Blærum'
		},
		utenlandskAdresse: {
			adressenavnNummer: 'AdressenavnNummer?',
			bygningEtasjeLeilighet: 'H4290',
			postboksNummerNavn: '42',
			postkode: '1337',
			bySted: 'Shanghai',
			regionDistriktOmraade: 'Shanghai',
			landkode: 'CN'
		},
		ukjentBosted: {
			bostedskommune: 'Vinje',
			kommune: 'Kommune'
		}
	},
	oppholdsadresse: null,
	kontaktadresser: [
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
				byEllerStedsnavn: 'Stedsnavn',
				postkode: '1234',
				landkode: 'Landkode'
			}
		}
	],
	kjonn: 'K',
	malform: 'se'
};

const mockVergeOgFullmakt: VergeOgFullmaktData = {
	vergemaalEllerFremtidsfullmakt: [
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
		}
	],
	fullmakt: [
		{
			motpartsPersonident: '1234567890',
			motpartsPersonNavn: {
				fornavn: 'Ola',
				mellomnavn: null,
				etternavn: 'Nordmann',
				forkortetNavn: 'Nordmann Ola'
			},
			motpartsRolle: 'FULLMEKTIG',
			omraader: [
				{
					kode: 'AAP',
					beskrivelse: 'Arbeidsavklaringspenger'
				},
				{
					kode: 'DAG',
					beskrivelse: 'Dagpenger'
				}
			],
			gyldigFraOgMed: '2021-03-02T13:00:42',
			gyldigTilOgMed: '2021-03-03T13:00:42'
		},
		{
			motpartsPersonident: '1234567891',
			motpartsPersonNavn: {
				fornavn: 'Ola',
				mellomnavn: null,
				etternavn: 'Nordmann',
				forkortetNavn: 'Nordmann Ola'
			},
			motpartsRolle: 'FULLMAKTSGIVER',
			omraader: [
				{
					kode: '*',
					beskrivelse: 'alle ytelser'
				}
			],
			gyldigFraOgMed: '2021-03-04T13:00:42',
			gyldigTilOgMed: '2021-03-05T13:00:42'
		}
	]
};

const mockTilrettelagtKommunikasjon: TilrettelagtKommunikasjonData = {
	talespraak: 'Engelsk',
	tegnspraak: null
};

const ordinaerRegistering: RegistreringsData = {
	type: 'ORDINAER',
	registrering: {
		opprettetDato: '2018-08-30T09:17:28.386804+02:00',
		manueltRegistrertAv: {
			ident: 'Z21345567',
			enhet: {
				id: '1234',
				navn: 'NAV TESTHEIM'
			}
		},
		besvarelse: {
			utdanning: 'VIDEREGAENDE_FAGBREV_SVENNEBREV',
			utdanningBestatt: 'JA',
			utdanningGodkjent: 'JA',
			helseHinder: 'NEI',
			andreForhold: 'NEI',
			sisteStilling: 'INGEN_SVAR',
			dinSituasjon: 'DELTIDSJOBB_VIL_MER'
		},
		profilering: {
			jobbetSammenhengendeSeksAvTolvSisteManeder: true,
			innsatsgruppe: 'BEHOV_FOR_ARBEIDSEVNEVURDERING'
		},
		teksterForBesvarelse: [
			{
				sporsmalId: 'dinSituasjon',
				sporsmal: 'Hvorfor registrerer du deg?',
				svar: 'Jeg har deltidsjobb, men vil jobbe mer'
			},
			{
				sporsmalId: 'sisteStilling',
				sporsmal: 'Din siste jobb',
				svar: 'Fotpleier'
			},
			{
				sporsmalId: 'utdanning',
				sporsmal: 'Hva er din høyeste fullførte utdanning?',
				svar: 'Videregående, fagbrev eller svennebrev (3 år eller mer)'
			},
			{
				sporsmalId: 'utdanningGodkjent',
				sporsmal: 'Er utdanningen din godkjent i Norge?',
				svar: 'Ja'
			},
			{
				sporsmalId: 'utdanningBestatt',
				sporsmal: 'Er utdanningen din bestått?',
				svar: 'Ja'
			},
			{
				sporsmalId: 'helseHinder',
				sporsmal: 'Trenger du oppfølging i forbindelse med helseutfordringer?',
				svar: 'Nei'
			},
			{
				sporsmalId: 'andreForhold',
				sporsmal: 'Trenger du oppfølging i forbindelse med andre utfordringer?',
				svar: 'Nei'
			}
		]
	}
};

// Kan brukes for å teste sykmeldt registrering istedenfor ordinær registrering
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sykmeldtRegistering: RegistreringsData = {
	registrering: {
		opprettetDato: '2018-08-30T09:17:28.386804+02:00',
		besvarelse: {
			fremtidigSituasjon: 'NY_ARBEIDSGIVER',
			utdanning: 'VIDEREGAENDE_FAGBREV_SVENNEBREV',
			utdanningBestatt: 'NEI',
			utdanningGodkjentNorge: 'JA',
			andreUtfordringer: 'NEI'
		},
		teksterForBesvarelse: [
			{
				sporsmalId: 'fremtidigSituasjon',
				sporsmal: 'Hva tenker du om din fremtidige situasjon?',
				svar: 'Jeg trenger ny jobb'
			},
			{
				sporsmalId: 'utdanning',
				sporsmal: 'Hva er din høyeste fullførte utdanning?',
				svar: 'Videregående, fagbrev eller svennebrev (3 år eller mer)'
			},
			{
				sporsmalId: 'utdanningGodkjent',
				sporsmal: 'Er utdanningen din godkjent i Norge?',
				svar: 'Ja'
			},
			{
				sporsmalId: 'utdanningBestatt',
				sporsmal: 'Er utdanningen din bestått?',
				svar: 'Nei'
			},
			{
				sporsmalId: 'andreForhold',
				sporsmal: 'Er det noe annet enn helsen din som NAV bør ta hensyn til?',
				svar: 'Nei'
			}
		]
	}
};

export const veilarbpersonHandlers: RequestHandlersList = [
	rest.get('/veilarbperson/api/person/cv_jobbprofil', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(cvOgJobbprofil));
	}),
	rest.get('/veilarbperson/api/person/aktorid', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(aktorId));
	}),
	rest.get('/veilarbperson/api/person/registrering', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(ordinaerRegistering));
	}),

	rest.get('/veilarbperson/api/v2/person', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(personaliav2));
	}),
	rest.get('/veilarbperson/api/v2/person/vergeOgFullmakt', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(mockVergeOgFullmakt));
	}),
	rest.get('/veilarbperson/api/v2/person/tolk', (req, res, ctx) => {
		return res(ctx.delay(500), ctx.json(mockTilrettelagtKommunikasjon));
	})
];
