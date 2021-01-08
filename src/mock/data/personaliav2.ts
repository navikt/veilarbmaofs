import { JSONValue } from 'yet-another-fetch-mock/dist/types/types';
import { PersonaliaV2Info } from '../../rest/datatyper/personaliav2';

const personalia: PersonaliaV2Info & JSONValue = {
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
	kontonummer: '12345678911',
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
	partner: {
		fornavn: 'PHILIPS',
		mellomnavn: null,
		etternavn: 'WAYNE',
		sammensattNavn: 'PHILIPS WAYNE',
		fodselsnummer: '12108000391',
		fodselsdato: '1980-12-10',
		dodsdato: null,
		harSammeBosted: true,
		kjonn: 'M'
	},
	bostedsadresse: {
		vegadresse: {
			postnummer: '1621',
			poststed: 'GRESSVIK',
			husnummer: 2228,
			husbokstav: null,
			kommunenummer: '0106',
			adressenavn: 'GATEVEIEN',
			tilleggsnavn: null
		}
	},
	midlertidigAdresseNorge: null,
	midlertidigAdresseUtland: null,
	postAdresse: {
		adresselinje1: 'C/O EGEN TEST',
		adresselinje2: 'SOLVEIEN',
		adresselinje3: null,
		postnummer: '7318'
	},
	egenAnsatt: true,
	kjonn: 'K'
};

export default personalia;
