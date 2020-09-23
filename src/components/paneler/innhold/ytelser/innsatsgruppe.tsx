import React from 'react';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import { OppfolgingsstatusData } from '../../../../rest/datatyper/oppfolgingsstatus';
import { servicegruppeKodeTilBeskrivelse } from '../../../../utils/arena-status-utils';
import EMDASH from '../../../../utils/emdash';
import { OrNothing } from '../../../../utils/felles-typer';

function Innsatsgruppe(props: { oppfolgingsstatus: OrNothing<OppfolgingsstatusData> }) {

	return (<InformasjonsbolkEnkel
		header="Innsatsgruppe"
		value={getInnsatsgruppeVisningstekst(props.oppfolgingsstatus)}
		defaultValue={EMDASH}
	/>);
}

export const getInnsatsgruppeVisningstekst = (oppfolgingsstatus: OrNothing<OppfolgingsstatusData>) => {
	if (oppfolgingsstatus && oppfolgingsstatus.servicegruppe) {
		return servicegruppeKodeTilBeskrivelse(oppfolgingsstatus.servicegruppe);
	}
	return null;
};

export default Innsatsgruppe;
