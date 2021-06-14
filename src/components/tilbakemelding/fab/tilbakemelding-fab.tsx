import React, { useRef, useState } from 'react';
import cls from 'classnames';
import TilbakemeldingModal, { TilbakemeldingProps } from '../tilbakemelding-modal';
import { logEvent } from '../../../utils/frontend-logger';
import lukkBilde from './lukk.svg';
import tilbakemeldingBilde from './tilbakemelding.svg';
import './tilbakemelding-fab.less';
import {SPOR_OM_TILBAKEMELDING} from "../../../rest/datatyper/feature";
import {hasData} from "../../../rest/utils";
import {useFetchFeatureToggle} from "../../../rest/api";

// FAB = Floating Action Button

export function TilbakemeldingFab() {
	const [hideFab, setHideFab] = useState(false);
	const [isModalOpen, setModalOpen] = useState(false);
	const wrapperDivRef = useRef<HTMLDivElement>(null);

	const useFetchFeatures = useFetchFeatureToggle();
	const sporOmTilbakemeldingFeature = hasData(useFetchFeatures) && useFetchFeatures.data[SPOR_OM_TILBAKEMELDING];

	const TILBAKEMELDING_PREFIX = 'har_sendt_tilbakemelding';
	const TILBAKEMELDING_FEATURE_TAG = 'familiemedlem_opplysninger_i_detaljer';
	const TILBAKEMELDING_LOCALSTORAGE_NAME = `${TILBAKEMELDING_PREFIX}__${TILBAKEMELDING_FEATURE_TAG}`;

	const harTidligereSendtTilbakemelding = () => {
		return window.localStorage.getItem(TILBAKEMELDING_LOCALSTORAGE_NAME) != null;
	};

	const handleFabClicked = () => {
		if (!isModalOpen) {
			logEvent('detaljer.tilbakemelding_modal_apnet');
		}
		setModalOpen(!isModalOpen);
	};

	const startAutoClose = () => {
		setTimeout(() => {
			setModalOpen(false);
		}, 1500);
	};

	const handleCheckboxTilbakemeldingSendt = (tilbakemelding: TilbakemeldingProps, checkboxStatusListe: any) => {
		startAutoClose();
		setHideFab(true);
		window.localStorage.setItem(TILBAKEMELDING_LOCALSTORAGE_NAME, 'true');
		logEvent('detaljer.tilbakemelding', {feature: TILBAKEMELDING_FEATURE_TAG, ...tilbakemelding, ...checkboxStatusListe});
	};

	const hide = !sporOmTilbakemeldingFeature || !harTidligereSendtTilbakemelding() || hideFab;

	return (
		<div ref={wrapperDivRef}>
			{!hide && (
				<button
					aria-label="Åpne tilbakemeldingsmodal"
					className={cls('tilbakemelding-fab', { 'tilbakemelding-fab__trykket': isModalOpen })}
					onClick={handleFabClicked}
				>
					<img
						className={cls({
							'tilbakemelding-fab__ikon--apne': !isModalOpen,
							'tilbakemelding-fab__ikon--lukke': isModalOpen
						})}
						src={isModalOpen ? lukkBilde : tilbakemeldingBilde}
						alt="Tilbakemelding ikon"
					/>
				</button>
			)}
			<TilbakemeldingModal
				open={isModalOpen}
				onTilbakemeldingSendt={handleCheckboxTilbakemeldingSendt}
			/>
		</div>
	);
}
export default TilbakemeldingFab;
