import React, {useEffect, useState} from 'react';
import cls from 'classnames';
import { Innholdstittel, Element } from 'nav-frontend-typografi';
import './tilbakemelding-modal.less';
import { Checkbox, Textarea } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';
import takkIkon from './takk-ikon.png'
import {isNullOrUndefined} from "../../utils";

export interface TilbakemeldingProps {
	checkboxIndexListe: number[];
	kommentar: string;
}

interface TilbakemeldingModalProps {
	open: boolean;
	onTilbakemeldingSendt: (tilbakemelding: TilbakemeldingProps, checkboxStatusListe: any) => void;
}

export enum CheckboxVerdier {
	PARTNER_NAVN = 'Partner/ektefelles navn',
	PARTNER_ALDER = 'Partner/ektefelles alder',
	PARTNER_FODSELSDATO = 'Partner/ektefelles fødselsdato',
	PARTNER_FODSELSNUMMER = 'Partner/ektefelles fulle fødselsnummer',
	BARNETS_NAVN = 'Barnets navn',
	BARNETS_ALDER = 'Barnets alder',
	BARNETS_FODSELSDATO = 'Barnets fødselsdato',
	BARNETS_FODSELSNUMMER = 'Barnets fulle fødselsnummer',
	BARNETS_KJONN = 'Barnets kjønn'
}

function TilbakemeldingModal(props: TilbakemeldingModalProps) {
	const [harBlittVist, setHarBlittVist] = useState(false);
	const [harSendt, setHarSendt] = useState(false);
	const [kommentar, setKommentar] = useState('');
	const [showFadeOutAnimation, setShowFadeOutAnimation] = useState(false);
	const [checkboxIndexListe, setcheckboxIndexListe] = useState<number[]>([]);

	const KOMMENTAR_ROWS = 5;
	const KOMMENTAR_MAX_CHAR = 750;

	const { open, onTilbakemeldingSendt } = props;

	const checkboxStatus: any = {};

	function hentCheckboksStatusListe(value: number[]) {
		checkboxStatus.partner_navn = value.includes(1);
		checkboxStatus.partner_alder =  value.includes(2);
		checkboxStatus.partner_fodselsdato = value.includes(3);
		checkboxStatus.partner_fodselsnummer = value.includes(4);
		checkboxStatus.barnets_navn = value.includes(5);
		checkboxStatus.barnets_alder = value.includes(6);
		checkboxStatus.barnets_fodselsdato = value.includes(7);
		checkboxStatus.barnets_fodselsnummer = value.includes(8);
		checkboxStatus.barnets_kjonn = value.includes(9);

		return checkboxStatus;
	}

	useEffect(()=> {
		if (open && !harBlittVist) {
			setHarBlittVist(true);
		}
	},[open, harBlittVist]);

	if ((!open && !harBlittVist)) {
		return null;
	}

	const handleKommentarChanged = (value: string) => {
		if (value.length <= KOMMENTAR_MAX_CHAR) {
			setKommentar(value);
		}
	};

	const handleCheckboxFormSubmitted = (e: any) => {
		e.preventDefault();
		if ((checkboxIndexListe.length > 0) || (!isNullOrUndefined(kommentar) && kommentar !== '')) {
			setHarSendt(true);
			onTilbakemeldingSendt({checkboxIndexListe, kommentar}, hentCheckboksStatusListe(checkboxIndexListe));
		} else {
			setShowFadeOutAnimation(true);
		}
	};

	const handleCheckboxChanged = (verdi: number, el: any) => {
		if (el.target.checked) {
			checkboxIndexListe.push(verdi);
		} else {
			let index = checkboxIndexListe.indexOf(verdi);
			checkboxIndexListe.splice(index,1);
		}
		setcheckboxIndexListe([...checkboxIndexListe]);
	};

	const renderTakkMelding = () => {
		return (
			<div className="tilbakemelding-modal__takk-melding-wrapper">
				<img
					alt="Takk for din tilbakemelding"
					className="tilbakemelding-modal__takk-ikon"
					src={takkIkon}
				/>
				<Element>
					Takk for at du tok deg tid til å gi tilbakemelding. Vi bruker innspillene til å forbedre løsningen.
				</Element>
			</div>
		);
	};

	const CheckboxValg = () => {
		return (
			<>
				{
					Object.keys(CheckboxVerdier).map((key, index) => {
						return (
							<Checkbox
								checked={checkboxIndexListe.includes(index+1)}
								label={CheckboxVerdier[key]}
								value={CheckboxVerdier[key]}
								key={index}
								onChange={e => handleCheckboxChanged(index+1, e)}
								className="tilbakemelding-modal__checkbox-element"
							/>
						)
					})
				}
			</>
		);
	};

	const renderCheckboxValg = () => {
		return (
			<div className={cls({ 'tilbakemelding-modal__innhold-fade-out': showFadeOutAnimation })}>
				<Innholdstittel className="blokk-xxs tilbakemelding-modal__tittel">Hva trenger du å vite om brukerens familie?</Innholdstittel>
				<Element className="blokk-xxs">Vi skal alltid prøve å begrense mengden informasjon vi har om brukerne våre. Hvor mye informasjon om brukers familie trenger du minimum for oppfølging mot arbeid?</Element>
				<form
					className="tilbakemelding-modal__ekspander"
					onSubmit={handleCheckboxFormSubmitted}
					data-widget="accessible-autocomplete"
				>
					<CheckboxValg/>
					<div className="tilbakemelding-modal__kommentar">
						<Textarea
							className="tilbakemelding-modal__kommentar-felt"
							label="Hva bruker du disse opplysningene til?"
							rows={KOMMENTAR_ROWS}
							maxLength={KOMMENTAR_MAX_CHAR}
							value={kommentar}
							onChange={(e) => handleKommentarChanged(e.target.value)}
						/>
					</div>
					<Hovedknapp role="submit" className="knapp--hoved">
						Send
					</Hovedknapp>
				</form>
			</div>
		);
	};

	return (
		<div
			className={cls('tilbakemelding-modal', {
				'tilbakemelding-modal--slide-in': open,
				'tilbakemelding-modal--slide-out': !open && !harSendt,
				'tilbakemelding-modal--slide-out-takk': !open && harSendt,
				'tilbakemelding-modal--takk-posisjon': harSendt
			})}
	>
		<div
			className={cls('tilbakemelding-modal__innhold', {
				'tilbakemelding-modal__innhold--takk': harSendt
			})}
		>
			{ harSendt ? renderTakkMelding() : renderCheckboxValg() }
		</div>
	</div>
	);
}

export default TilbakemeldingModal;
