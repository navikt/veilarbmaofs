import React from 'react';
import { formateStringInUpperAndLowerCase } from '../../../../utils';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import { hasData } from '../../../../rest/utils';
import TilrettelagtKommunikasjon from './tilrettelagtKommunikasjon';
import { useFetchSpraakTolk } from '../../../../rest/api';
import { useAppStore } from '../../../../stores/app-store';
import Kontonummer from './kontonummer';
import { StringOrNothing } from '../../../../utils/felles-typer';
import { hentMalform } from '../../../../utils/konstanter';
import { Normaltekst } from 'nav-frontend-typografi';
import Informasjonsbolk from '../../../felles/informasjonsbolk';

function GeneralInfo(props: { kontonummer: string; statsborgerskap: string; malform: StringOrNothing }) {
	const { kontonummer, statsborgerskap, malform, ...rest } = props;
	const { fnr } = useAppStore();
	const tilrettelagtKommunikasjon = useFetchSpraakTolk(fnr);

	return (
		<div {...rest}>
			<Kontonummer kontonummer={kontonummer} />
			<InformasjonsbolkEnkel
				header="Statsborgerskap"
				value={formateStringInUpperAndLowerCase(statsborgerskap)}
				childclassname="innrykk"
			/>
			{hasData(tilrettelagtKommunikasjon) && (
				<TilrettelagtKommunikasjon tilrettelagtKommunikasjon={tilrettelagtKommunikasjon.data} />
			)}
			{malform && (
				<Informasjonsbolk header="Målform">
					<Normaltekst className="innrykk">{hentMalform(malform)}</Normaltekst>
				</Informasjonsbolk>
			)}
		</div>
	);
}

export default GeneralInfo;
