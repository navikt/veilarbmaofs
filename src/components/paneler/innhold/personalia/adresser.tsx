import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import {
	Gateadresse,
	Matrikkeladresse,
	PersonaliaInfo,
	PersonaliaMidlertidigAdresse,
	PersonaliaPostadresse,
	PersonaliaStrukturertMidlertidigAdresse,
	PostboksadresseNorsk,
	UstrukturertAdresse
} from '../../../../rest/datatyper/personalia';
import EMDASH from '../../../../utils/emdash';
import { isNullOrUndefined, visEmdashHvisNull } from '../../../../utils';
import { OrNothing } from '../../../../utils/felles-typer';

function SammensattFolkeregistrertAdresse(props: Pick<PersonaliaInfo, 'bostedsadresse'>) {
	if (isNullOrUndefined(props.bostedsadresse)) {
		return null;
	}

	const adresse = props.bostedsadresse.strukturertAdresse.Gateadresse!;

	return (
		<div className="underinformasjon">
			<Element>Folkeregistrert postadresse</Element>
			{!isNullOrUndefined(adresse) ? <GateAdresse adresse={adresse} /> : EMDASH}
		</div>
	);
}

interface MidlertidigAdresseVisningProps {
	overskrift: string;
	midlertidigAdresse: OrNothing<PersonaliaMidlertidigAdresse>;
}

function MidlertidigAdresseVisning(props: MidlertidigAdresseVisningProps) {
	if (isNullOrUndefined(props.midlertidigAdresse)) {
		return null;
	}

	const midlertidigAdresse = props.midlertidigAdresse as PersonaliaMidlertidigAdresse;
	const strukturertAdresse = (midlertidigAdresse as PersonaliaStrukturertMidlertidigAdresse).strukturertAdresse;
	const ustrukturertAdresse = (midlertidigAdresse as PersonaliaPostadresse).ustrukturertAdresse;

	let adresseVisning = null;

	if (strukturertAdresse) {
		if (strukturertAdresse.Matrikkeladresse) {
			adresseVisning = <MatrikkelAdresse adresse={strukturertAdresse.Matrikkeladresse} />;
		} else if (strukturertAdresse.Gateadresse) {
			adresseVisning = <GateAdresse adresse={strukturertAdresse.Gateadresse} />;
		} else if (strukturertAdresse.PostboksadresseNorsk) {
			adresseVisning = <PostboksAdresse adresse={strukturertAdresse.PostboksadresseNorsk} />;
		}
	} else if (ustrukturertAdresse) {
		adresseVisning = <UstrukturertAdresseVisning ustrukturertAdresse={ustrukturertAdresse} />;
	}

	return (
		<div className="underinformasjon">
			<Element>{props.overskrift}</Element>
			{adresseVisning}
		</div>
	);
}

function PostAdresse(props: { postAdresse: PersonaliaPostadresse }) {
	if (isNullOrUndefined(props.postAdresse) || isNullOrUndefined(props.postAdresse.ustrukturertAdresse)) {
		return null;
	}

	return (
		<div className="underinformasjon">
			<Element> Postadresse </Element>
			<UstrukturertAdresseVisning ustrukturertAdresse={props.postAdresse.ustrukturertAdresse} />
		</div>
	);
}

function UstrukturertAdresseVisning(props: { ustrukturertAdresse: UstrukturertAdresse }) {
	if (isNullOrUndefined(props.ustrukturertAdresse)) {
		return null;
	}

	const { adresselinje1, adresselinje2, adresselinje3, adresselinje4, landkode } = props.ustrukturertAdresse;

	return (
		<>
			<Normaltekst> {visEmdashHvisNull(adresselinje1)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje2)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje3)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(adresselinje4)} </Normaltekst>
			<Normaltekst> {visEmdashHvisNull(landkode)} </Normaltekst>
		</>
	);
}

function MatrikkelAdresse(props: { adresse: Matrikkeladresse }) {
	const {
		postnummer,
		poststed,
		landkode,
		gardsnummer,
		bruksnummer,
		festenummer,
		undernummer,
		eiendomsnavn,
		tilleggsadresse
	} = props.adresse;
	return (
		<>
			<Normaltekst>
				Gårdsnummer: {gardsnummer}
				<br />
				Bruksnummer: {bruksnummer}
				<br />
				Festenummer: {festenummer}
				<br />
				Undernummer: {undernummer}
				<br />
				Eiendomsnavn: {eiendomsnavn}
				<br />
				Tilleggsadresse: {tilleggsadresse}
				<br />
			</Normaltekst>
			<Normaltekst>{`${postnummer || ''} ${poststed || ''}, ${landkode || ''}`}</Normaltekst>
		</>
	);
}

function GateAdresse(prop: { adresse: Gateadresse }) {
	const { gatenavn, husnummer, husbokstav, postnummer, poststed } = prop.adresse;
	return (
		<>
			<Normaltekst>{`${gatenavn || ''} ${husnummer || ''}${husbokstav || ''}`}</Normaltekst>
			<Normaltekst>{`${postnummer} ${poststed}`}</Normaltekst>
		</>
	);
}

function PostboksAdresse(prop: { adresse: PostboksadresseNorsk }) {
	const { postnummer, poststed, postboksnummer, postboksanlegg } = prop.adresse;
	return (
		<>
			<Normaltekst>{`Postboks ${(postboksnummer || '').trim()} ${postboksanlegg || ''}`}</Normaltekst>
			<Normaltekst>{`${postnummer || ''} ${poststed || ''}`}</Normaltekst>
		</>
	);
}

type Props = Pick<PersonaliaInfo, 'bostedsadresse'> &
	Pick<PersonaliaInfo, 'postAdresse'> &
	Pick<PersonaliaInfo, 'midlertidigAdresseNorge'> &
	Pick<PersonaliaInfo, 'midlertidigAdresseUtland'>;

function Adresser(props: Props) {
	const { bostedsadresse, postAdresse, midlertidigAdresseNorge, midlertidigAdresseUtland, ...rest } = props;
	return (
		<div {...rest}>
			<SammensattFolkeregistrertAdresse bostedsadresse={bostedsadresse} />
			<PostAdresse postAdresse={postAdresse} />
			<MidlertidigAdresseVisning
				overskrift="Midlertidig adresse Norge"
				midlertidigAdresse={midlertidigAdresseNorge}
			/>
			<MidlertidigAdresseVisning
				overskrift="Midlertidig adresse Utland"
				midlertidigAdresse={midlertidigAdresseUtland}
			/>
		</div>
	);
}

export default Adresser;
