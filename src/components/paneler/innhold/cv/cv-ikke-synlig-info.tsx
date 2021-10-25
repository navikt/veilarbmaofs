import React from 'react';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';

export const CvIkkeSynligInfo = () => {
	return (
		<AlertStripeInfo className="cv-ikke-synlig blokk-l">
			Fra 17.2.2021 kan arbeidsgivere kun se CV til jobbsøkere som ikke er under arbeidsrettet oppfølging fra NAV.
			<br />
			Les mer om{' '}
			<a href="https://navno.sharepoint.com/sites/fag-og-ytelser-arbeid-markedsarbeid/SitePages/Oversikt-over-veileders-tilgang-p%C3%A5-CV-og-jobbprofil.aspx">
				synlig CV
			</a>
			.
		</AlertStripeInfo>
	);
};
