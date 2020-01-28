import React from 'react';
import cls from 'classnames';
import { isPending } from '@nutgaard/use-async';
import { Laster } from '../felles/fetch';
import { Paneler } from '../paneler/paneler';
import { useFetchOppfolgingsstatus } from '../../rest/api';
import { useAppStore } from '../../stores/app-store';

interface DetaljerViewProps {
	hidden?: boolean;
}

export const DetaljerView = (props: DetaljerViewProps) => {
	const { fnr } = useAppStore();
	const oppfolgingstatus = useFetchOppfolgingsstatus(fnr);
	return (
		<div className={cls('veilarbmaofs', { 'veilarbmaofs--hidden': props.hidden })}>
			<div className="veilarbmaofs__container">
				{
					isPending(oppfolgingstatus)
						? <Laster midtstilt={true} />
						: <Paneler />
				}
			</div>
		</div>
	);
};
