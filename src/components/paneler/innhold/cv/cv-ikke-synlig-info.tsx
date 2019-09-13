import React from 'react';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';

interface CvIkkeSynligInfoProps {
	erSynlig: boolean;
	harJobbprofil: boolean;
}

const harJobbprofileTekst = 'Hvis brukeren vil at CV-en skal være synlig for arbeidsgivere, '
	+ 'sjekk Arena om brukeren står som "ikke-match nav.no" eller "fritatt for kandidatsøk. ';

const harIkkeJobbprofileTekst = 'Hvis brukeren vil at CV-en skal være synlig for arbeidsgivere, '
	+ 'må brukeren fylle ut jobbprofil. Sjekk i tillegg Arena om brukeren står '
	+ 'som "ikke-match nav.no" eller "fritatt for kandidatsøk". ';

export const CvIkkeSynligInfo = (props: CvIkkeSynligInfoProps) => {
	if (props.erSynlig) {
		return null;
	}

	return (
		<AlertStripeInfo className="cv-ikke-synlig">
			{props.harJobbprofil ? harJobbprofileTekst : harIkkeJobbprofileTekst}
			<br/>
			Les mer om <a href="https://navno.sharepoint.com/sites/fag-og-ytelser-arbeid-markedsarbeid/SitePages/Vi-varsle-brukere-som-ikke-har-synlig-CV.aspx">synlig CV</a>
		</AlertStripeInfo>
	);
};
