import React from 'react';
import { CopyToClipboard } from '@navikt/ds-react-internal';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { isNullOrUndefined } from '../../../../utils';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { PersonaliaEpost } from '../../../../rest/datatyper/personaliav2';
import { hentKilde } from '../../../../utils/konstanter';
import EMDASH from '../../../../utils/emdash';
import { OrNothing } from '../../../../utils/felles-typer';

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
		<Informasjonsbolk header="Epost" {...rest}>
			<Normaltekst className="innrykk wrap-anywhere flex-align-center">
				{epostAdresse}
				{epostAdresse && (
					<CopyToClipboard
						copyText={epostAdresse}
						popoverText="Kopiert"
						popoverPlacement="top"
						size="xsmall"
						title="Kopier e-postadresse"
					/>
				)}
			</Normaltekst>
			<Undertekst className="kilde-tekst">
				<span>
					Registrert {epostSistOppdatert && epostSistOppdatert}
					{` ${hentKilde(master)}`}
				</span>
			</Undertekst>
		</Informasjonsbolk>
	);
}

export default Epost;
