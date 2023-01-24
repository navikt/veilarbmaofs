import { useAppStore } from '../../stores/app-store';
import { TilretteleggingsbehovSpa, TilretteleggingsbehovViewType } from '../tilretteleggingsbehov-spa';

export const TilretteleggingsbehovView = () => {
	const { fnr } = useAppStore();
	return (
		<TilretteleggingsbehovSpa fnr={fnr} viewType={TilretteleggingsbehovViewType.REGISTRER_TILRETTELEGGINGSBEHOV} />
	);
};
