import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import { fetchPersonaliaV2 } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import LenkeBrukerprofil from '../lenkebrukerprofil/lenke-brukerprofil';
import KontaktInformasjon from './KontaktInformasjon';
import FamilieRelasjoner from './FamilieRelasjoner';
import VergeFullmaktInfo from './VergeFullmaktInfo';
import GeneralInfo from './GeneralInfo';
import './personalia-panel-innhold.less';
import Grid from '../../../felles/grid';
import { isNotStartedOrPending, isRejected, isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { PersonaliaV2Info } from '../../../../rest/datatyper/personaliav2';

const PersonaliaV2PanelInnhold = () => {
	const { fnr } = useAppStore();
	const personaliav2 = usePromise<AxiosResponse<PersonaliaV2Info>>(() => fetchPersonaliaV2(fnr));

	if (isNotStartedOrPending(personaliav2)) {
		return <Laster />;
	} else {
		if (isRejected(personaliav2)) {
			return <Feilmelding />;
		} else {
			if (!isResolved(personaliav2)) {
				return <NoData tekst="Ingen persondata tilgjengelig" />;
			}
		}
	}

	const {
		bostedsadresse,
		oppholdsadresse,
		kontaktadresser,
		telefon,
		epost,
		kontonummer,
		statsborgerskap,
		sivilstand,
		barn,
		malform
	} = personaliav2.result.data;

	return (
		<>
			{personaliav2.result.data.sivilstand.length > 1 && (
				<Feilmelding tekst="Her kommer teksten om dobbel sannhet sivilstand" />
			)}
			<Grid columns={4} gap="1rem">
				<KontaktInformasjon
					telefon={telefon}
					epost={epost}
					bostedsadresse={bostedsadresse}
					oppholdsadresse={oppholdsadresse}
					kontaktadresser={kontaktadresser}
				/>
				<FamilieRelasjoner sivilstand={sivilstand} barn={barn} />
				<GeneralInfo kontonummer={kontonummer} statsborgerskap={statsborgerskap} malform={malform} />
				<div>
					<VergeFullmaktInfo />
				</div>
			</Grid>
			<LenkeBrukerprofil />
		</>
	);
};

export default PersonaliaV2PanelInnhold;
