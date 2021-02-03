import React from 'react';
import { isNullOrUndefined, visEmdashHvisNull } from '../../../../utils';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../../../utils/emdash';
import {
	Matrikkeladresse,
	PersonaliaMidlertidigAdresseUtland,
	PersonaliaPostadresse,
	PersonaliaV2Info,
	Vegadresse
} from '../../../../rest/datatyper/personaliav2';
import { OrNothing } from '../../../../utils/felles-typer';

function SammensattFolkeregistrertAdresse(props: Pick<PersonaliaV2Info, 'bostedsadresse'>) {
	if (isNullOrUndefined(props.bostedsadresse)) {
		return null;
	}

	const vegadresse = props.bostedsadresse && props.bostedsadresse.vegadresse as Vegadresse;
	const matrikkeladrese = props.bostedsadresse && props.bostedsadresse.matrikkeladresse as Matrikkeladresse;
	let adresseVisning = null;

	if(vegadresse) {
		adresseVisning = <VegAdresse adresse={vegadresse}/> ;
	} else if(matrikkeladrese) {
		adresseVisning = <MatrikkelAdresse adresse={matrikkeladrese} /> ;
	}

	return (
		<div className="underinformasjon">
			<Element>Folkeregistrert postadresse</Element>
			{!isNullOrUndefined(adresseVisning) ? adresseVisning : EMDASH}
		</div>
	);
}

function VegAdresse(prop: { adresse: OrNothing<Vegadresse> }) {
	const { adressenavn, husnummer, husbokstav, postnummer, poststed } = prop.adresse as Vegadresse;
	return (
		<>
			<Normaltekst>{`${adressenavn || ''} ${husnummer || ''}${husbokstav || ''}`}</Normaltekst>
			<Normaltekst>{`${postnummer} ${poststed}`}</Normaltekst>
		</>
	);
}

function MatrikkelAdresse(prop: { adresse: OrNothing<Matrikkeladresse> }) {
	const { bruksenhetsnummer, tilleggsnavn, kommunenummer, postnummer } = prop.adresse as Matrikkeladresse;

	return (
		<>
			<Normaltekst>
				Bruksenhetsnummer: {bruksenhetsnummer}
				<br />
				kommunenummer: {kommunenummer}
				<br />
				Tilleggsadresse: {tilleggsnavn}
				<br />
				Postnummer: {postnummer}
			</Normaltekst>
		</>
	);
}

function MidlertidigAdresseUtland(props: Pick<PersonaliaV2Info, 'midlertidigAdresseUtland'>) {
	if (isNullOrUndefined(props.midlertidigAdresseUtland)) {
		return null;
	}

	const { adresselinje1, adresselinje2, adresselinje3, adresselinje4, byEllerStednavn, landkode } = props.midlertidigAdresseUtland as PersonaliaMidlertidigAdresseUtland;

	return (
		<>
			<Element> Midlertidig adresse Utland </Element>
			<Normaltekst> {visEmdashHvisNull(adresselinje1)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje2)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje3)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje4)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(byEllerStednavn)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(landkode)} </Normaltekst>
		</>
	);
}

function PostAdresse(props: Pick<PersonaliaV2Info, 'postAdresse'>) {
	if (isNullOrUndefined(props.postAdresse)) {
		return null;
	}

	const { adresselinje1, adresselinje2, adresselinje3, postnummer } = props.postAdresse as PersonaliaPostadresse;

	return (
		<>
			<Element> Postadresse </Element>
			<Normaltekst> {visEmdashHvisNull(adresselinje1)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje2)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje3)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(postnummer)} </Normaltekst>
		</>
	);
}

type Props = Pick<PersonaliaV2Info, 'bostedsadresse'> &
	Pick<PersonaliaV2Info, 'postAdresse'> &
	Pick<PersonaliaV2Info, 'midlertidigAdresseUtland'>;

function Adresser(props: Props) {
	const { bostedsadresse, postAdresse, midlertidigAdresseUtland, ...rest } = props;
	return (
		<div {...rest}>
			<SammensattFolkeregistrertAdresse bostedsadresse={bostedsadresse} />
			<PostAdresse postAdresse={postAdresse} />
			<MidlertidigAdresseUtland midlertidigAdresseUtland={midlertidigAdresseUtland} />
		</div>
	);
}

export default Adresser;
