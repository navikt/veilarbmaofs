import React from 'react';
import EMDASH from '../../utils/emdash';
import { isNullOrUndefined } from '../../utils';
import { StringOrNothing } from '../../utils/felles-typer';
import Informasjonsbolk from './informasjonsbolk';
import { BodyShort } from '@navikt/ds-react';

interface Props {
	header: string;
	value?: StringOrNothing;
	defaultValue?: string;
	className?: string;
	childclassname?: string;
}

function InformasjonsbolkEnkel(props: Props) {
	const { value, defaultValue, ...rest } = props;
	let content: string | React.ReactElement<Props> = EMDASH;
	if (!(isNullOrUndefined(props.value) && isNullOrUndefined(props.defaultValue))) {
		content = <BodyShort className={props.childclassname}>{value || defaultValue}</BodyShort>;
	}

	return <Informasjonsbolk {...rest}>{content}</Informasjonsbolk>;
}

export default InformasjonsbolkEnkel;
