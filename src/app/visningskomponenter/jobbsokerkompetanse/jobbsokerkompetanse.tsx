import * as React from 'react';
import { KartleggingData } from "../../datatyper/kartlegging";
import Grid from "../../utils/grid";
import Informasjonsbolk from "../felles-komponenter/informasjonsbolk";
import InformasjonsbolkPunktliste from "../felles-komponenter/informasjonsbolk-punktliste";
import SistEndret from "../felles-komponenter/sist-endret";
import {safeMap} from "../utils";
import { RaadVisning } from "./raad-visning";

function Jobbsokerkompetanse(props: { data: { jobbsokerkompetanse: KartleggingData }}) {
    const { besvarelseDato, kulepunkter, raad } = props.data.jobbsokerkompetanse;

    const kulepunktListe = kulepunkter.map(punkt => punkt.kulepunkt);
    const raadliste = safeMap(raad,(rad, index) => (
        <li key={index}>
            <RaadVisning raad={rad} />
        </li>)
    );

    return (
        <>
            <SistEndret sistEndret={besvarelseDato} />
            <Grid columns={1} gap="0rem">
                <InformasjonsbolkPunktliste header="Dette gjør du bra" list={kulepunktListe} className="jobbsokerkompetanse__punktliste"/>
                <Informasjonsbolk header="Dette kan du gjøre bedre" className="jobbsokerkompetanse__raadliste">
                    <ul>
                        {raadliste}
                    </ul>
                </Informasjonsbolk>
            </Grid>
        </>
    );
}

export default Jobbsokerkompetanse;
