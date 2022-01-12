import React from 'react';
import { Raad, RaadAktivitet } from '../../../../rest/datatyper/kartlegging';
import { skillUtTipsTilDegFraTekst } from '../../../../utils';
import { Ekspanderbar } from './ekspanderbar';
import Informasjonsbolk from '../../../felles/informasjonsbolk';
import { BodyShort, Label } from '@navikt/ds-react';

function RaadAktivitetsvisning(props: { data: RaadAktivitet[]; hidden: boolean }) {
	const aktiviteter = props.hidden
		? null
		: props.data.map((raadaktivitet, index) => {
				const html = { __html: raadaktivitet.innhold };
				return (
					<li key={index}>
						<Label>{raadaktivitet.tittel}</Label>
						<BodyShort>
							<span dangerouslySetInnerHTML={html} />
						</BodyShort>
					</li>
				);
		  });
	return <ul>{aktiviteter}</ul>;
}

export function RaadVisning(props: { raad: Raad }) {
	const { raadAktiviteter, raadIngress, raadTittel, raadKey } = props.raad;
	const ingressOgTips: string[] = skillUtTipsTilDegFraTekst(raadIngress);
	const tips = ingressOgTips[1];
	const tekst = ingressOgTips[0];

	return (
		<Informasjonsbolk header={raadTittel} key={raadKey}>
			<>
				<Ekspanderbar tekst={tekst} lenketekst={tips}>
					<RaadAktivitetsvisning data={raadAktiviteter} hidden={false} />
				</Ekspanderbar>
			</>
		</Informasjonsbolk>
	);
}
