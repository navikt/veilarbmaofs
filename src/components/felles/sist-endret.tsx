import React from 'react';
import cls from 'classnames';
import { StringOrNothing } from '../../utils/felles-typer';
import { formaterDato } from '../../utils';
import { BodyShort } from '@navikt/ds-react';

interface SistEndretProps {
	sistEndret: StringOrNothing;
	onlyYearAndMonth: boolean;
	className?: string;
}

function SistEndret(props: SistEndretProps) {
	const formattertTidspunkt = formaterDato(props.sistEndret, props.onlyYearAndMonth);

	return (
		<BodyShort className={cls('italic-gra', props.className)}>{`Sist endret: ${formattertTidspunkt}`}</BodyShort>
	);
}

export default SistEndret;
