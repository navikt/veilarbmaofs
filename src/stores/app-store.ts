import { useState } from 'react';
import { SidemenyElement, sidemenyElementId } from '../utils/sidemeny';
import constate from 'constate';

export const [AppStoreProvider, useAppStore] = constate(
	(initalValues: { fnr: string; enhetId?: string; sidemenyElementer: SidemenyElement[] }) => {
		const [fnr, setFnr] = useState(initalValues.fnr);
		const [enhetId, setEnhetId] = useState(initalValues.enhetId);
		const [valgteSidemenyElmenter, setValgteSidemenyElementer] = useState<string[]>([
			sidemenyElementId.oppfolging,
			sidemenyElementId.cv
		]);
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
			sidemenyElementer,
			setIsOpenSidemenyElement,
			isSidemenyElementOpen,
			valgteSidemenyElmenter,
			fjernSidemenyElement
		};
	}
);
