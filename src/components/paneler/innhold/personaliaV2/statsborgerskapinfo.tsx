import { isArray, isString } from '@craco/craco/dist/lib/utils';
import { formateStringInUpperAndLowerCase } from '../../../../utils';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

function StatsborgerskapInfo(props: { stasborgerskapData: string[] | string }) {
	const headerVerdi = 'Statsborgerskap';

	return (
		<div>
			{isArray(props.stasborgerskapData) && (
				<div className="underinformasjon">
					<Element>{headerVerdi}</Element>
					{props.stasborgerskapData.map(statsborgerskap => {
						return (
							<Normaltekst className="innrykk" key={statsborgerskap}>
								{formateStringInUpperAndLowerCase(statsborgerskap)}
							</Normaltekst>
						);
					})}
				</div>
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
