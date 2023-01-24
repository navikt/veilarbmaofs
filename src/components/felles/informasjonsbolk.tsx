import React from 'react';
import cls from 'classnames';
import { Heading, Label } from '@navikt/ds-react';

interface Props {
	header: string;
	headerTypo?: 'ingress' | 'element';
	children: React.ReactNode;
	className?: string;
	icon?: React.ReactNode;
}

function Informasjonsbolk(props: Props) {
	const { header, headerTypo = 'element', children, className, icon, ...rest } = props;

	return (
		<div className={cls('informasjonsbolk', className)} {...rest}>
			<span className="informasjonsbolk-tittel">
				{icon}
				{headerTypo === 'ingress' && (
					<Heading level="4" size="small">
						{header}
					</Heading>
				)}
				{headerTypo === 'element' && <Label size="small">{header}</Label>}
			</span>
			{children}
		</div>
	);
}

export default Informasjonsbolk;
