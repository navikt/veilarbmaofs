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
import { BodyShort } from '@navikt/ds-react';

const PersonaliaV2PanelInnhold = () => {
	const { fnr } = useAppStore();
	const personalia = usePromise<AxiosResponse<PersonaliaV2Info>>(() => fetchPersonaliaV2(fnr));

	if (isNotStartedOrPending(personalia)) {
		return <Laster />;
	} else {
		if (isRejected(personalia)) {
			return <Feilmelding />;
		} else {
			if (!isResolved(personalia)) {
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
		partner,
		sivilstandliste,
		barn,
		malform
	} = personalia.result.data;
	return (
		<>
			{personalia.result.data.sivilstandliste && personalia.result.data.sivilstandliste.length > 1 && (
				<Feilmelding>
					<BodyShort size="small">
						Det er motstridende informasjon i kildene for sivilstand. Personen bør bes om å oppdatere sin
						sivilstand hos Folkeregisteret (https://www.skatteetaten.no/person/folkeregister/)
					</BodyShort>
				</Feilmelding>
			)}
			<Grid columns={4} gap="1rem">
				<KontaktInformasjon
					telefon={telefon}
					epost={epost}
					bostedsadresse={bostedsadresse}
					oppholdsadresse={oppholdsadresse}
					kontaktadresser={kontaktadresser}
				/>
				<FamilieRelasjoner partner={partner} sivilstandliste={sivilstandliste} barn={barn} />
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
