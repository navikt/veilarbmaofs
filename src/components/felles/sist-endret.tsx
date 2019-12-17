import React from 'react';
import cls from 'classnames';
import { Normaltekst } from 'nav-frontend-typografi';
import { StringOrNothing } from '../../utils/felles-typer';
import { formaterDato } from '../../utils';

interface SistEndretProps {
	sistEndret: StringOrNothing;
	onlyYearAndMonth: boolean;
	className?: string;
}

function SistEndret(props: SistEndretProps) {
	const formattertTidspunkt = formaterDato(props.sistEndret, props.onlyYearAndMonth);

	return (
		<Normaltekst className={cls('italic-gra', props.className)}>
			{`Sist endret: ${formattertTidspunkt}`}
		</Normaltekst>
	);
}

export default SistEndret;
