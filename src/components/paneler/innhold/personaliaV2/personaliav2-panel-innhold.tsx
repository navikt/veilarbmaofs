import React from 'react';
import Grid from '../../../felles/grid';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import { useAppStore } from '../../../../stores/app-store';
import { kalkulerAlder } from '../../../../utils/date-utils';
import Adresser from './adresser';
import Sivilstand from './sivilstand';
import Partner from './partner';
import Barn from './barn';
import Telefon from './telefon';
import {useFetchPersonaliaV2, useFetchSpraakTolk, useFetchVergOgFullmakt} from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import { isPending, hasError } from '@nutgaard/use-fetch';
import { hasData } from '../../../../rest/utils';
import Vergemaal from "./vergemaal";
import Fullmakt from "./fullmakt";
import TilrettelagtKommunikasjon from "./tilrettelagtKommunikasjon";

const MAX_ALDER_BARN = 21;

const PersonaliaV2PanelInnhold = () => {
	const { fnr } = useAppStore();
	const personaliav2 = useFetchPersonaliaV2(fnr);
	const vergeOgFullmakt = useFetchVergOgFullmakt(fnr);
	const tilrettelagtKommunikasjon = useFetchSpraakTolk(fnr);

	if (isPending(personaliav2)) {
		return <Laster />;
	} else if (hasError(personaliav2)) {
		return <Feilmelding />;
	} else if (!hasData(personaliav2)) {
		return <NoData tekst="Ingen persondata tilgjengelig" />;
	}

	if (!hasData(vergeOgFullmakt)) {
		return <NoData tekst="Bruker har ikke vergemål eller fullmakt" />;
	}

	if (!hasData(tilrettelagtKommunikasjon)) {
		return <NoData tekst="Bruker har ikke behov for språktolk" />
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

	const {
		vergeEllerFremtidsfullmakt,
		fullmakt
	} = vergeOgFullmakt.data;

	const tilrettelagtKommunikasjonData = tilrettelagtKommunikasjon.data;

	const filtrertBarneListe = barn && barn.filter(
		enkeltBarn => kalkulerAlder(new Date(enkeltBarn.fodselsdato)) < MAX_ALDER_BARN
	);

	return (
		<Grid columns={5} gap="0.5rem">
			<Telefon telefon={telefon} />
			<Sivilstand sivilstand={sivilstand} />
			<InformasjonsbolkEnkel header="Epost" value={epost} className="break-all" />
			<InformasjonsbolkEnkel header="Kontonummer" value={kontonummer} />
			<InformasjonsbolkEnkel header="Statsborgerskap" value={statsborgerskap} />
			<Adresser
				bostedsadresse={bostedsadresse}
				oppholdsadresse={oppholdsadresse}
				kontaktadresser={kontaktadresser}
			/>
			<Partner partner={partner} />
			<Barn barn={filtrertBarneListe} />
			<Vergemaal vergeEllerFremtidsfullmakt={vergeEllerFremtidsfullmakt} />
			<Fullmakt fullmakt={fullmakt} />
			<TilrettelagtKommunikasjon tilrettelagtKommunikasjon={tilrettelagtKommunikasjonData} />
		</Grid>
	);
};

export default PersonaliaV2PanelInnhold;
