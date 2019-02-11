import * as React from 'react';
import { getData, SourceConfig } from '../../fetch-utils';
import { AppProps } from '../application';
import { OppfolgingData } from '../datatyper/oppfolging';
import { PersonaliaInfo } from '../datatyper/personalia';
import Datafetcher from '../utils/datafetcher';
import { renderBasisInfo } from './basisinfo-visning';
import './basisinfo.less';

interface BasisinfoData {
    personalia: PersonaliaInfo;
    feature: { 'mao.sykmeldt_med_arbeidsgiver': boolean };
}

interface BasisinfoProps {
    oppfolging: OppfolgingData;
}

type Props = AppProps & BasisinfoProps;

function Basisinfo({fnr, oppfolging}: Props) {
    const sourceConfig: SourceConfig<BasisinfoData> = {
        feature: {
            allwaysUseFallback: true,
            fallback: { 'mao.sykmeldt_med_arbeidsgiver': false },
            url: '/veilarbpersonflatefs/api/feature?feature=mao.sykmeldt_med_arbeidsgiver'
        },
        personalia: `/veilarbperson/api/person/${fnr}`
    };

    const data = getData<BasisinfoData>(sourceConfig);

    return (
        <Datafetcher data={data}>
            {(a: BasisinfoData) => {
                return renderBasisInfo({ personalia: a.personalia, feature: a.feature, oppfolging });
            }}
        </Datafetcher>
    );
}

export default Basisinfo;
