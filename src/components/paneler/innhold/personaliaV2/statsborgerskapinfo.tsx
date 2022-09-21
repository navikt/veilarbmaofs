import { formateStringInUpperAndLowerCase } from '../../../../utils';
import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

function StatsborgerskapInfo(props: { stasborgerskapData: string[] }) {
	const headerVerdi = 'Statsborgerskap';

	return (
		<div>
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
		</div>
	);
}

export default StatsborgerskapInfo;
