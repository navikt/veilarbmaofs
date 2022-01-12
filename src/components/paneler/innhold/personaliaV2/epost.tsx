import React from 'react';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { PersonaliaEpost } from '../../../../rest/datatyper/personaliav2';
import { hentKilde } from '../../../../utils/konstanter';
import EMDASH from '../../../../utils/emdash';
import { OrNothing } from '../../../../utils/felles-typer';
import { BodyShort, Detail } from '@navikt/ds-react';

function Epost(props: { epost: OrNothing<PersonaliaEpost> }) {
	const { epost, ...rest } = props;

	if (isNullOrUndefined(epost?.epostAdresse)) {
		return (
			<Informasjonsbolk header="Epost" {...rest}>
				{EMDASH}
			</Informasjonsbolk>
		);
	}

	const { epostAdresse, epostSistOppdatert, master } = epost!;

	return (
		<Informasjonsbolk header="Epost" {...rest} className="break-all">
			<BodyShort>{epostAdresse}</BodyShort>
			<Detail size="small" className="kilde-tekst">
				<span>
					Registrert {epostSistOppdatert && epostSistOppdatert}
					{` ${hentKilde(master)}`}
				</span>
			</Detail>
		</Informasjonsbolk>
	);
}

export default Epost;
