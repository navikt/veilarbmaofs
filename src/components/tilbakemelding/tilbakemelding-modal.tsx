import React, {useEffect, useState} from 'react';
import cls from 'classnames';
import { Innholdstittel, Element } from 'nav-frontend-typografi';
import './tilbakemelding-modal.less';
import {Checkbox, Textarea} from "nav-frontend-skjema";
import {Hovedknapp} from "nav-frontend-knapper";

export interface TilbakemeldingProps {
	checkboxListe: string[];
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
	const [checkboxListe, setCheckboxListe] = useState<string[]>([]);

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

	const handleCheckboxChanged = (index: number, verdi: string) => {
		setCheckboxListe(prevState => {
			const prevListeCopy = [...prevState];
			if(prevListeCopy.includes(verdi)){
				prevListeCopy.splice(index,1);
			} else {
				prevListeCopy[index] = verdi;
			}
			setCheckboxListe(prevListeCopy);
			return prevListeCopy;
		})
	};

	const renderTakkMelding = () => {
		return (
			<div className="tilbakemelding-modal__takk-melding-wrapper">
				<img
					alt="Takk for din tilbakemelding"
					className="tilbakemelding-modal__takk-ikon"
					src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABQVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBQMAAAAAAAAAAAADCgYAAAAAAAACBgMAAAAAAAAAAQEAAAAAAAAFEQoAAAAAAAAAAAARMR0fWjYoc0UwilMzlVk2nV4VPCQmbkI1ml04oWEbTi81mFw0mFsWQCYykVcsgE0MIhQUOiI2m10xjlUIGA4JHBEIGQ8TOCIbTy8GEQoQMB0BBQMSNR8JGxAcUjEiYzwEDAcyklguhVA0lloXQigvh1EviFIXQygKHhINJhc3n18PLRsKHREqekkAAgEYRiogXDcnckQgXjgeWDUqeUkBBAIYRyoUOyQ0lVojZT0NJxcgXjkDCgYtg08ncEMwjFQBAwEDCQUMIxUHFAwlakAjZj4ZRysSMx8QLhwTOSIbTS4re0o3n2CSKFGVAAAAHXRSTlMAJWaVvN7s+S+M4jbA/r8kqv4E+v4Tvv4r3f5F8rmg0BYAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4wIEDg4gBtUn9wAAAjlJREFUSMedVmdj2jAUFBuTQtgEwrFBEMxqQhLIJB1p0126917//wfUCEolGbDRfTvxDktvE2KGw+lye7w+n9fjdjkdxAb8WgACAprfQrJxzTAL5vKFYqlcLhUL+VzQOAhtrJBshoFIpVqjHGrVSgQIby6RRLUY4vUGNWGnHkdMiy7SJJJINXW6EHozhWTCrNlKI9OiS9HKIL0la7azaOt0BfQ2stvSd7LodOlKdDvICt9KpNGhluggzb0rmkS7ay3qtpH870MNGd1aY7wrA20e01iqZUdj+DAV+xflMJr2NJQ2EZ7lG+K2LscuGMc0D0Oo29VQWkeI1QIifL71ru/2eKve7h7PdyLwM9dVeKM+sM/zfaDP8wpzYABV/vAAOOT5IXDA8yoCRm0jKNTPABjyfAgMeF4LwkGcyAkvPQKOeX4MHAkGOTiJC3nh7ASnZzw/O8WJYJCHi7hREJ16PhL56FzkBbiJB0WbIZqhCA/xorSeqAQv8aG8nqgMn5pI6XpKjjC53AoTl8vBtcQkuHIaWWKSRnLCXtyQrW7e4hlLWLk0bl/ekUR3r3jGSkMuwnv3H4iah3jE02kRSuVOH+MJT5+OhT9pTMvd1Fie4fmLOXk5fiVkzKyxmFvY6/Gb+lv26HeXGAr9et7CzM3yff8DPl592hvg8xfxl3mzXNSWR1+/ff/x89fvP+Ix15aVBoDaqFEaamrjU21Qq60EasvHijWnsXzNIUoLFcvD9Vc3NhjXXxIZLNfRv/8qPkEO8w3mAAAAAElFTkSuQmCC"
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
								checked={checkboxListe.includes(CheckboxVerdier[key])}
								label={CheckboxVerdier[key]}
								value={CheckboxVerdier[key]}
								key={index}
								onChange={e => handleCheckboxChanged(index, e.target.value)}
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
				<Element className="tilbakemelding-modal__ingress">Vi skal alltid prøve å begrense mengden informasjon vi har om brukerne våre. Hvor mye informasjon om brukers familie trenger du minimum for oppfølging mot arbeid?</Element>
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
