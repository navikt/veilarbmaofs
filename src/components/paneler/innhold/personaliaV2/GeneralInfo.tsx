import React from 'react';
import { formateStringInUpperAndLowerCase } from '../../../../utils';
import InformasjonsbolkEnkel from "../../../felles/informasjonsbolk-enkel";
import {hasData} from "../../../../rest/utils";
import TilrettelagtKommunikasjon from "./tilrettelagtKommunikasjon";
import {useFetchSpraakTolk} from "../../../../rest/api";
import {useAppStore} from "../../../../stores/app-store";

function GeneralInfo(props: { kontonummer: string, statsborgerskap:string }) {
    const { kontonummer, statsborgerskap, ...rest } = props;
    const { fnr } = useAppStore();
    const tilrettelagtKommunikasjon = useFetchSpraakTolk(fnr);

    return (
        <div {...rest} className="break-all-sm-column">
            <InformasjonsbolkEnkel header="Kontonummer" value={kontonummer} />
            <InformasjonsbolkEnkel header="Statsborgerskap" value={formateStringInUpperAndLowerCase(statsborgerskap)} />
            {hasData(tilrettelagtKommunikasjon) && (
                <TilrettelagtKommunikasjon tilrettelagtKommunikasjon={tilrettelagtKommunikasjon.data} />
            )}
        </div>
    );
}

export default GeneralInfo;
