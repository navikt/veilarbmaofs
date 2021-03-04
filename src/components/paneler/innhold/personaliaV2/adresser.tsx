import React from 'react';
import { isNullOrUndefined, visEmdashHvisNull } from '../../../../utils';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../../../utils/emdash';
import {
	Kontaktadresse,
	Matrikkeladresse,
	PersonaliaV2Info,
	PostadresseIFrittFormat,
	Postboksadresse,
	Ukjentbosted,
	Utenlandskadresse,
	UtenlandskadresseIFrittFormat,
	Vegadresse
} from '../../../../rest/datatyper/personaliav2';
import {OrNothing} from '../../../../utils/felles-typer';

function BostedsAdresse(props: Pick<PersonaliaV2Info, 'bostedsadresse'>) {
	if (isNullOrUndefined(props.bostedsadresse)) {
		return null;
	}

	const vegadresse = props.bostedsadresse?.vegadresse;
	const matrikkeladrese = props.bostedsadresse?.matrikkeladresse;
	const utenlandskadresse = props.bostedsadresse?.utenlandskAdresse;
	const ukjentbosted = props.bostedsadresse?.ukjentBosted;
	const coAdressenavn = props.bostedsadresse?.coAdressenavn;
	let adresseVisning = null;

	if(vegadresse) {
		adresseVisning = <VegAdresse adresse={vegadresse}/> ;
	} else if(matrikkeladrese) {
		adresseVisning = <MatrikkelAdresse adresse={matrikkeladrese} /> ;
	} else if(utenlandskadresse) {
		adresseVisning = <UtenlandskAdresse adresse={utenlandskadresse}/> ;
	} else if(ukjentbosted)	{
		adresseVisning = <UkjentBosted adresse={ukjentbosted}/> ;
	}

	return (
		<div className="underinformasjon">
			<Element>Bostedsadresse</Element>
			<Normaltekst>{coAdressenavn || ''}</Normaltekst>
			{!isNullOrUndefined(adresseVisning) ? adresseVisning : EMDASH}
		</div>
	);
}

function OppholdsAdresse(props: Pick<PersonaliaV2Info, 'oppholdsadresse'>) {
	if (isNullOrUndefined(props.oppholdsadresse)) {
		return null;
	}

	const vegadresse = props.oppholdsadresse?.vegadresse;
	const matrikkeladrese = props.oppholdsadresse?.matrikkeladresse;
	const utenlandskadresse = props.oppholdsadresse?.utenlandskAdresse;
	const coAdressenavn = props.oppholdsadresse?.coAdressenavn;
	let adresseVisning = null;

	if(vegadresse) {
		adresseVisning = <VegAdresse adresse={vegadresse}/> ;
	} else if(matrikkeladrese) {
		adresseVisning = <MatrikkelAdresse adresse={matrikkeladrese} /> ;
	} else if(utenlandskadresse) {
		adresseVisning = <UtenlandskAdresse adresse={utenlandskadresse}/> ;
	}

	return (
		<div className="underinformasjon">
			<Element>Oppholdsadresse</Element>
			<Normaltekst>{coAdressenavn || ''}</Normaltekst>
			{!isNullOrUndefined(adresseVisning) ? adresseVisning : EMDASH}
		</div>
	);
}

function KontaktAdresse(props: {kontaktadresse: Kontaktadresse}) {
	if (isNullOrUndefined(props.kontaktadresse)) {
		return null;
	}

	const vegadresse = props.kontaktadresse?.vegadresse;
	const postboksadresse = props.kontaktadresse?.postboksadresse;
	const utenlandskadresse = props.kontaktadresse?.utenlandskAdresse;
	const postadresseIFrittFormat = props.kontaktadresse?.postadresseIFrittFormat;
	const utenlandskAdresseIFrittFormat = props.kontaktadresse?.utenlandskAdresseIFrittFormat;
	const coAdressenavn = props.kontaktadresse?.coAdressenavn;
	const adresseType = props.kontaktadresse?.type;
	let adresseVisning = null;

	if(vegadresse) {
		adresseVisning = <VegAdresse adresse={vegadresse}/> ;
	} else if(postboksadresse) {
		adresseVisning = <PostboksAdresse adresse={postboksadresse} /> ;
	} else if(utenlandskadresse) {
		adresseVisning = <UtenlandskAdresse adresse={utenlandskadresse}/>;
	} else if(postadresseIFrittFormat) {
		adresseVisning = <PostAdresseIFrittFormat adresse={postadresseIFrittFormat}/>;
	} else if(utenlandskAdresseIFrittFormat) {
		adresseVisning = <UtenlandskAdresseIFrittFormat adresse={utenlandskAdresseIFrittFormat}/>;
	}

	return (
		<div className="underinformasjon">
			<Element>Kontaktadresse {`(${adresseType})`}</Element>
			<Normaltekst>{coAdressenavn || ''}</Normaltekst>
			{ !isNullOrUndefined(adresseVisning) ? adresseVisning : EMDASH }
		</div>
	);
}

function VegAdresse(prop: { adresse: OrNothing<Vegadresse> }) {
	const { adressenavn, husnummer, husbokstav, postnummer, poststed, kommunenummer, kommune } = prop.adresse as Vegadresse;
	return (
		<>
			<Normaltekst>{`${adressenavn || ''} ${husnummer || ''}${husbokstav || ''}`}</Normaltekst>
			<Normaltekst>{`${postnummer || ''} ${poststed || ''}`}</Normaltekst>
			{ kommunenummer && <Normaltekst> {`kommune: ${kommunenummer || ''} ${kommune || ''}`} </Normaltekst> }
		</>
	);
}

function MatrikkelAdresse(prop: { adresse: OrNothing<Matrikkeladresse> }) {
	const { bruksenhetsnummer, tilleggsnavn, kommunenummer, postnummer, poststed, kommune } = prop.adresse as Matrikkeladresse;

	return (
		<>
			{ bruksenhetsnummer && <Normaltekst> {`Bolignummer ${bruksenhetsnummer}`} </Normaltekst> }
			{ tilleggsnavn && <Normaltekst>  ${tilleggsnavn} </Normaltekst> }
			{ postnummer && <Normaltekst> {`${postnummer} ${poststed || ''}`} </Normaltekst> }
			{ kommunenummer && <Normaltekst> {`kommune: ${kommunenummer} ${kommune || ''}`} </Normaltekst> }
		</>
	);
}

function PostboksAdresse(prop: { adresse: Postboksadresse }) {
	const { postbokseier, postboks, postnummer, poststed } = prop.adresse as Postboksadresse;
	return (
		<>
			<Normaltekst>{`Postboks ${(postboks || '').trim()} ${postbokseier || ''}`}</Normaltekst>
			<Normaltekst>{`${postnummer || ''} ${poststed || ''}`}</Normaltekst>
		</>
	);
}

function UtenlandskAdresse(prop: { adresse: OrNothing<Utenlandskadresse> }) {
	const { adressenavnNummer, bygningEtasjeLeilighet, postboksNummerNavn, postkode, bySted, regionDistriktOmraade, landkode } = prop.adresse as Utenlandskadresse;

	return (
		<>
			<Normaltekst>{adressenavnNummer || ''}</Normaltekst>
			<Normaltekst>{bygningEtasjeLeilighet || ''}</Normaltekst>
			<Normaltekst>{postboksNummerNavn || ''}</Normaltekst>
			<Normaltekst>{postkode || ''}</Normaltekst>
			<Normaltekst>{bySted || ''}</Normaltekst>
			<Normaltekst>{regionDistriktOmraade || ''}</Normaltekst>
			<Normaltekst>{landkode || ''}</Normaltekst>
		</>
	);
}

function UkjentBosted(prop: { adresse: OrNothing<Ukjentbosted> }) {
	const { bostedskommune, kommune } = prop.adresse as Ukjentbosted;

	return (
		<>
			{ bostedskommune && <Normaltekst> {`kommune: ${bostedskommune} ${kommune || ''}`} </Normaltekst> }
		</>
	);
}

function UtenlandskAdresseIFrittFormat(props: { adresse: OrNothing<UtenlandskadresseIFrittFormat> }) {
	const { adresselinje1, adresselinje2, adresselinje3, byEllerStedsnavn, landkode, postkode } = props.adresse as UtenlandskadresseIFrittFormat;

	return (
		<>
			<Normaltekst> {visEmdashHvisNull(adresselinje1)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje2)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje3)} </Normaltekst>
			<Normaltekst> {`${postkode || ''} ${byEllerStedsnavn || ''}`} </Normaltekst>
			<Normaltekst> {landkode || ''} </Normaltekst>
		</>
	);
}

function PostAdresseIFrittFormat(props: { adresse: OrNothing<PostadresseIFrittFormat> }) {
	const { adresselinje1, adresselinje2, adresselinje3, postnummer, poststed } = props.adresse as PostadresseIFrittFormat;

	return (
		<>
			<Normaltekst> {visEmdashHvisNull(adresselinje1)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje2)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje3)} </Normaltekst>
			<Normaltekst> {`${postnummer || ''} ${poststed || ''}`} </Normaltekst>
		</>
	);
}

type Props = Pick<PersonaliaV2Info, 'bostedsadresse'> &
	Pick<PersonaliaV2Info, 'oppholdsadresse'> &
	Pick<PersonaliaV2Info, 'kontaktadresser'>;

function Adresser(props: Props) {
	const { bostedsadresse, oppholdsadresse, kontaktadresser, ...rest } = props;
	const kontaktadresseList = kontaktadresser && kontaktadresser.length!== 0 ? kontaktadresser.map(kontaktadresse => <KontaktAdresse kontaktadresse={kontaktadresse} />) : EMDASH;

	return (
		<div {...rest}>
			<BostedsAdresse bostedsadresse={bostedsadresse} />
			<OppholdsAdresse oppholdsadresse={oppholdsadresse} />
			{kontaktadresseList}
		</div>
	);
}

export default Adresser;
