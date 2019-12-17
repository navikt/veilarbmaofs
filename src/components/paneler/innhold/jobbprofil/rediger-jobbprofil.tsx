import React from 'react';
import Lenke from 'nav-frontend-lenker';

export function RedigerJobbprofil(props: { erManuell: boolean; jobbprofilRegistreringsLenke: string }) {
	if (!props.erManuell) {
		return null;
	}
	return (
		<Lenke href={props.jobbprofilRegistreringsLenke} className="endre-lenke" target="_blank">
			<span>Endre jobbprofil </span>
		</Lenke>
	);
}
