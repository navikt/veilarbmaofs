import React from 'react';
import Grid from '../../../felles/grid';
import InformasjonsbolkEnkel from '../../../felles/informasjonsbolk-enkel';
import { useAppStore } from '../../../../stores/app-store';
import { kalkulerAlder } from '../../../../utils/date-utils';
import Adresser from './adresser';
import Sivilstand from './sivilstand';
import Partner from './partner';
import Barn from './barn';
import { fetchPersonalia } from '../../../../rest/api';
import { Feilmelding, Laster, NoData } from '../../../felles/fetch';
import LenkeBrukerprofil from '../lenkebrukerprofil/lenke-brukerprofil';
import { isNotStartedOrPending, isRejected, isResolved, usePromise } from '../../../../utils/use-promise';
import { AxiosResponse } from 'axios';
import { PersonaliaInfo } from '../../../../rest/datatyper/personalia';

const MAX_ALDER_BARN = 21;

const PersonaliaPanelInnhold = () => {
	const { fnr } = useAppStore();
	const personalia = usePromise<AxiosResponse<PersonaliaInfo>>(() => fetchPersonalia(fnr));

	if (isNotStartedOrPending(personalia)) {
		return <Laster midtstilt={true} />;
	} else if (isRejected(personalia)) {
		return <Feilmelding />;
	} else if (!isResolved(personalia)) {
		return <NoData />;
	}

	const {
		bostedsadresse,
		postAdresse,
		midlertidigAdresseNorge,
		midlertidigAdresseUtland,
		telefon,
		epost,
		kontonummer,
		statsborgerskap,
		sivilstand,
		partner,
		barn
	} = personalia.result.data;

	const filtrertBarneListe = barn.filter(
		enkeltBarn => kalkulerAlder(new Date(enkeltBarn.fodselsdato)) < MAX_ALDER_BARN
	);

	return (
		<>
			<Grid columns={5} gap="0.5rem">
				<Adresser
					bostedsadresse={bostedsadresse}
					postAdresse={postAdresse}
					midlertidigAdresseNorge={midlertidigAdresseNorge}
					midlertidigAdresseUtland={midlertidigAdresseUtland}
				/>
				<InformasjonsbolkEnkel header="Telefon" value={telefon} />
				<InformasjonsbolkEnkel header="Epost" value={epost} className="break-all" />
				<InformasjonsbolkEnkel header="Kontonummer" value={kontonummer} />
				<InformasjonsbolkEnkel header="Statsborgerskap" value={statsborgerskap} />
				<Sivilstand sivilstand={sivilstand} />
				<Partner partner={partner} />
				<Barn barn={filtrertBarneListe} />
			</Grid>
			<LenkeBrukerprofil />
		</>
	);
};

export default PersonaliaPanelInnhold;
