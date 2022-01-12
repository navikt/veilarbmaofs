import React from 'react';
import cls from 'classnames';
import { Ingress, Label } from '@navikt/ds-react';

interface Props {
	header: string;
	headerTypo?: 'ingress' | 'element';
	children: React.ReactNode;
	className?: string;
}

function Informasjonsbolk(props: Props) {
	const { header, headerTypo = 'element', children, className, ...rest } = props;

	return (
		<div className={cls('informasjonsbolk', className)} {...rest}>
			{headerTypo === 'ingress' && <Ingress>{header}</Ingress>}
			{headerTypo === 'element' && <Label>{header}</Label>}
			{children}
		</div>
	);
}

export default Informasjonsbolk;
