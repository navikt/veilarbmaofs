import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import EMDASH from '../../utils/emdash';
import { isNullOrUndefined } from '../../utils';
import { StringOrNothing } from '../../utils/felles-typer';
import Informasjonsbolk from './informasjonsbolk';

interface Props {
	header: string;
	value?: StringOrNothing;
	defaultValue?: string;
	className?: string;
	childClassName?: string;
}

function InformasjonsbolkEnkel(props: Props) {
	const { value, defaultValue, ...rest } = props;
	let content: string | React.ReactElement<Props> = EMDASH;
	if (!(isNullOrUndefined(props.value) && isNullOrUndefined(props.defaultValue))) {
		content = <Normaltekst className={props.childClassName}>{value || defaultValue}</Normaltekst>;
	}

	return <Informasjonsbolk {...rest}>{content}</Informasjonsbolk>;
}

export default InformasjonsbolkEnkel;
