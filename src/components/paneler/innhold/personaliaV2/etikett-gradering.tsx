import { graderingBeskrivelse, graderingKode } from '../../../../utils/konstanter';
import { EtikettAdvarsel } from "nav-frontend-etiketter";
import { Normaltekst } from "nav-frontend-typografi";
import { Gradering } from "../../../../rest/datatyper/personaliav2";

export function etikettGradering(gradering: Gradering) {
	return (
		<EtikettAdvarsel mini className="tooltip">
			{graderingKode(gradering)}
			<Normaltekst className="tooltiptext">{graderingBeskrivelse(gradering)}</Normaltekst>
		</EtikettAdvarsel>
	)
}

export default etikettGradering;
