import React, {useEffect, useState} from 'react';
import cls from 'classnames';
import { Innholdstittel, Element } from 'nav-frontend-typografi';
import './tilbakemelding-modal.less';
import { Checkbox, Textarea } from 'nav-frontend-skjema';
import { Hovedknapp } from 'nav-frontend-knapper';
import takkIkon from './takk-ikon.png'

export interface TilbakemeldingProps {
	checkboxListe: number[];
	kommentar: string;
}

interface TilbakemeldingModalProps {
	open: boolean;
	onTilbakemeldingSendt: (tilbakemelding: TilbakemeldingProps) => void;
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
	const [checkboxListe, setCheckboxListe] = useState<number[]>([]);

	const KOMMENTAR_ROWS = 5;
	const KOMMENTAR_MAX_CHAR = 750;

	const { open, onTilbakemeldingSendt } = props;

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
		if (checkboxListe.length === 0) {
			setShowFadeOutAnimation(true);
		} else {
			setHarSendt(true);
			onTilbakemeldingSendt({checkboxListe, kommentar});
		}
	};

	const handleCheckboxChanged = (verdi: number, el: any) => {
		if (el.target.checked) {
			checkboxListe.push(verdi);
		} else {
			let index = checkboxListe.indexOf(verdi);
			checkboxListe.splice(index,1);
		}
		setCheckboxListe([...checkboxListe]);
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
								checked={checkboxListe.includes(index+1)}
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
