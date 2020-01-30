import React from 'react';
import { isPending } from '@nutgaard/use-async';
import { Laster } from '../felles/fetch';
import { Paneler } from '../paneler/paneler';
import { useFetchOppfolgingsstatus } from '../../rest/api';
import { useAppStore } from '../../stores/app-store';

export const DetaljerView = () => {
	const { fnr } = useAppStore();
	const oppfolgingstatus = useFetchOppfolgingsstatus(fnr);
	return (
		<div className="veilarbmaofs__container">
			{
				isPending(oppfolgingstatus)
					? <Laster midtstilt={true} />
					: <Paneler />
			}
		</div>
	);
};
