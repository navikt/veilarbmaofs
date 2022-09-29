import { formateStringInUpperAndLowerCase } from '../../../../utils';
import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

function StatsborgerskapInfo(props: { stasborgerskapData: string[] }) {
	const headerVerdi = 'Statsborgerskap';

	return (
		<div className="informasjonsbolk">
			<Element>{headerVerdi}</Element>
			{props.stasborgerskapData.map(statsborgerskap => {
				return (
					<Normaltekst className="innrykk" key={statsborgerskap}>
						{formateStringInUpperAndLowerCase(statsborgerskap)}
					</Normaltekst>
				);
			})}
		</div>
	);
}

export default StatsborgerskapInfo;
