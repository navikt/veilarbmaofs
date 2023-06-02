import { useViewStore, ViewType } from '../../stores/view-store';
import { DetaljerView } from './detaljer-view';
import { useEventListener } from '../../utils';
import { View } from './view';

export function ViewController() {
	const { view } = useViewStore();
	const { changeView } = useViewStore();

	useEventListener('veilarbmaofs.visDetaljer', () => changeView(ViewType.DETALJER));

	return (
		<View hidden={view !== ViewType.DETALJER}>
			<DetaljerView />
		</View>
	);
}
