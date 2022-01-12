import React from 'react';
import { useAppStore } from '../../../../stores/app-store';
import { useFetchPersonaliaV2 } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { isPending, hasError } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import LenkeBrukerprofil from '../lenkebrukerprofil/lenke-brukerprofil';
import KontaktInformasjon from './KontaktInformasjon';
import FamilieRelasjoner from './FamilieRelasjoner';
import VergeFullmaktInfo from './VergeFullmaktInfo';
import GeneralInfo from './GeneralInfo';
import './personalia-panel-innhold.less';
import Grid from '../../../felles/grid';

const PersonaliaV2PanelInnhold = () => {
	const { fnr } = useAppStore();
	const personaliav2 = useFetchPersonaliaV2(fnr);

	if (isPending(personaliav2)) {
		return <Laster />;
	} else if (hasError(personaliav2)) {
		return <Feilmelding />;
	} else if (!hasData(personaliav2)) {
		return <NoData tekst="Ingen persondata tilgjengelig" />;
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
		partner,
		barn
	} = personaliav2.data;

	return (
		<>
			<Grid columns={4} gap="1rem">
				<KontaktInformasjon
					telefon={telefon}
					epost={epost}
					bostedsadresse={bostedsadresse}
					oppholdsadresse={oppholdsadresse}
					kontaktadresser={kontaktadresser}
				/>
				<FamilieRelasjoner sivilstand={sivilstand} partner={partner} barn={barn} />
				<GeneralInfo kontonummer={kontonummer} statsborgerskap={statsborgerskap} />
				<div>
					<VergeFullmaktInfo />
				</div>
			</Grid>
			<LenkeBrukerprofil />
		</>
	);
};

export default PersonaliaV2PanelInnhold;
