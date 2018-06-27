import * as React from 'react';
import { getData, SourceConfig } from "../../fetch-utils";
import { AppProps } from "../application";
import Datafetcher from "../utils/datafetcher";
import { kalkulerAlder } from "../utils/date-utils";
import { PersonaliaInfo } from "../visningskomponenter/personalia/personalia";
import ContentLoader from './../utils/content-loader';
import ApneLukkeKnapp from './apne-lukke-knapp';
import './basisinfo.less';
import KvinneIkon from './kvinne.svg';
import MannIkon from './mann.svg';

function render( { personalia }: { personalia: PersonaliaInfo }) {
    const alder = kalkulerAlder(new Date(personalia.fodselsdato));
    const ikon = personalia.kjonn === "K" ? KvinneIkon : MannIkon;
    const ikonTekst = `ikon ${personalia.kjonn === 'K' ? 'kvinne': 'mann'}`;

    return (
        <>
            <img src={ikon} className="basisinfo__ikon" alt={ikonTekst}/>
            <div className="basisinfo__personalia">
                <div className="basisinfo__personalia">
                    <h1 className="basisinfo__navnogalder typo-innholdstittel">
                        {personalia.sammensattNavn}
                        <span> {`${alder} år`}</span>
                    </h1>
                    <span className="basisinfo__fodselsnummer">{personalia.fodselsnummer}</span>
                </div>
            </div>
            <div className="basisinfo__apnelukke">
                <ApneLukkeKnapp />
            </div>
        </>
    );
}

function Placeholder() {
    return (
        <ContentLoader height={94} width={1120} primaryColor="#C6C2BF" secondaryColor="#E9E7E7">
            <rect x="0" y="0" rx="5" ry="5" width="32" height="26" />
            <rect x="48" y="0" rx="5" ry="5" width="934.375" height="30" />
            <rect x="48" y="37" rx="5" ry="5" width="87.46875" height="14" />
            <rect x="1005.375" y="2" rx="5" ry="5" width="55.609375" height="14" />
        </ContentLoader>
    );
}

function Basisinfo({ fnr }: AppProps) {
    const sourceConfig: SourceConfig<{personalia: string}> = {
        personalia: `/veilarbperson/api/person/${fnr}`
    };

    const data = getData<{ personalia: PersonaliaInfo }>(sourceConfig);

    return (
        <>
            <Datafetcher data={data} loader={Placeholder}>
                { render }
            </Datafetcher>
        </>
    );
}

export default Basisinfo;