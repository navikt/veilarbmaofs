import * as React from 'react';
import { kalkulerAlder } from "../../utils/date-utils";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {IPersonaliaInfo} from "./personalia";

const Barn = (props: Pick<IPersonaliaInfo, 'barn'>) => {
    if (isNullOrUndefined(props.barn)) {
        return null;
    }

    const barnListe = props.barn.map((barn, index) => {
        const { harSammeBosted, sammensattNavn, fodselsnummer, fodselsdato, kjonn } = barn;
        const borSammen = harSammeBosted ? 'Bor med bruker' : 'Bor ikke med bruker';
        const lesbartKjonn = kjonn === 'M' ? "Gutt" : "Jente";
        const alder = kalkulerAlder(new Date(fodselsdato));

        return (<div key={`barn-${index}`} className="underinformasjon">
            <div>
                {`${sammensattNavn} (${alder}), ${lesbartKjonn}`}
            </div>
            <div>
                {fodselsnummer}
            </div>
            <div>
                {borSammen}
            </div>
        </div>);
    });
    return (
        <Informasjonsbolk {...props}>
            <div>
                Barn:
            </div>
            {barnListe}
        </Informasjonsbolk>
    );
};

export default Barn;