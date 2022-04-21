import React from 'react';
import { formateStringInUpperAndLowerCase } from '../../../../utils';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import TilrettelagtKommunikasjon from './tilrettelagtKommunikasjon';
import { fetchSpraakTolk } from '../../../../rest/api';
import { useAppStore } from '../../../../stores/app-store';
import Kontonummer from './kontonummer';
import { StringOrNothing } from '../../../../utils/felles-typer';
import { hentMalform } from '../../../../utils/konstanter';
import { isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { TilrettelagtKommunikasjonData } from '../../../../rest/datatyper/tilrettelagtKommunikasjon';

function GeneralInfo(props: { kontonummer: string; statsborgerskap: string; malform: StringOrNothing }) {
	const { kontonummer, statsborgerskap, malform, ...rest } = props;
	const { fnr } = useAppStore();
	const tilrettelagtKommunikasjon = usePromise<AxiosResponse<TilrettelagtKommunikasjonData>>(() =>
		fetchSpraakTolk(fnr)
	);

	return (
		<div {...rest}>
			<Kontonummer kontonummer={kontonummer} />
			<InformasjonsbolkEnkel
				header="Statsborgerskap"
				value={formateStringInUpperAndLowerCase(statsborgerskap)}
				childclassname="innrykk"
			/>
			{isResolved(tilrettelagtKommunikasjon) && (
				<TilrettelagtKommunikasjon tilrettelagtKommunikasjon={tilrettelagtKommunikasjon.result.data} />
			)}
			<InformasjonsbolkEnkel header="Målform" value={hentMalform(malform)} childclassname="innrykk" />
		</div>
	);
}

export default GeneralInfo;
