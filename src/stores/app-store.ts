import { useState } from 'react';
import { SidemenyElement, sidemenyElementId } from '../utils/sidemeny';
import constate from 'constate';
import { initialFeatures } from '../rest/datatyper/feature';

export const [AppStoreProvider, useAppStore] = constate(
	(initalValues: { fnr: string; enhetId?: string; sidemenyElementer: SidemenyElement[] }) => {
		const [fnr, setFnr] = useState(initalValues.fnr);
		const [enhetId, setEnhetId] = useState(initalValues.enhetId);
		const [features, setFeatures] = useState(initialFeatures);
		const [valgteSidemenyElmenter, setValgteSidemenyElementer] = useState<string[]>([sidemenyElementId.oppfolging]);
		const sidemenyElementer = initalValues.sidemenyElementer;

		const setIsOpenSidemenyElement = (sidemenyElement: SidemenyElement) => {
			setValgteSidemenyElementer([...valgteSidemenyElmenter, sidemenyElement.id]);
		};

		const fjernSidemenyElement = (sidemenyelementId: string) => {
			setValgteSidemenyElementer(valgteSidemenyElmenter.filter(id => id !== sidemenyelementId));
		};

		const isSidemenyElementOpen = (sidemenyElementId: string): boolean =>
			valgteSidemenyElmenter.some(e => e === sidemenyElementId);

		return {
			fnr,
			setFnr,
			enhetId,
			setEnhetId,
			features,
			setFeatures,
			sidemenyElementer,
			setIsOpenSidemenyElement,
			isSidemenyElementOpen,
			valgteSidemenyElmenter,
			fjernSidemenyElement
		};
	}
);
