import { CopyToClipboard } from '@navikt/ds-react-internal';
import { BodyShort, Detail } from '@navikt/ds-react';
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
			<BodyShort className="innrykk wrap-anywhere flex-align-center">
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
			</BodyShort>
			<Detail className="kilde-tekst">
				<span>
					Registrert {epostSistOppdatert && epostSistOppdatert}
					{` ${hentKilde(master)}`}
				</span>
			</Detail>
		</Informasjonsbolk>
	);
}

export default Epost;
