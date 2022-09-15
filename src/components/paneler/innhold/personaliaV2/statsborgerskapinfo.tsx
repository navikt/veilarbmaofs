import { StringOrNothing } from '../../../../utils/felles-typer';
import { isArray, isString } from '@craco/craco/dist/lib/utils';
import InformasjonsbolkListe from '../../../felles/informasjonsbolk-liste';
import { formateStringInUpperAndLowerCase } from '../../../../utils';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import React from 'react';

function StatsborgerskapInfo(props: { stasborgerskapData: string[] | string }) {
	const headerVerdi = 'Statsborgerskap';
	const statsborgerskapList = (statsborgerskapListData: string[]) =>
		statsborgerskapListData.map(statsborgerskap => formateStringInUpperAndLowerCase(statsborgerskap));

	return (
		<div>
			{isArray(props.stasborgerskapData) && (
				<InformasjonsbolkListe header={headerVerdi} list={statsborgerskapList(props.stasborgerskapData)} />
			)}
			{isString(props.stasborgerskapData) && (
				<InformasjonsbolkEnkel
					header={headerVerdi}
					value={formateStringInUpperAndLowerCase(props.stasborgerskapData)}
					childclassname="innrykk"
				/>
			)}
		</div>
	);
}

export default StatsborgerskapInfo;
