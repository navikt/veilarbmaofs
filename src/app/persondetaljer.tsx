import * as React from 'react';
import cls from 'classnames';

import { FetchContext } from '../config';
import { AppContext, AppContextProp, withAppContext } from './context';

import { AppProps } from './application';
import Basisinfo from './basisinfo/basisinfo';
import Tilbakelenke from './tilbakelenke';
import Informasjonsvisning from './visningskomponenter/informasjonsvisning';

import './persondetaljer.less';

import { UnmountClosed as Collapse } from 'react-collapse';
import { getData, SourceConfig } from '../fetch-utils';
import { createOppfolgingDataSourceConfig, OppfolgingData } from './datatyper/oppfolging';
import Datafetcher from './utils/datafetcher';

export interface Feature {
    [key: string]: boolean;
}

interface PersondetaljerData {
    oppfolging: OppfolgingData;
    feature: { 'modia.layout_med_visittkort': boolean };
}

class Persondetaljer extends React.Component<AppContextProp & AppProps> {

    lagNyLayout(oppfolgingData: OppfolgingData, fetchContext: FetchContext) {
        return (
            <React.Fragment key={this.props.fnr}>
                <div className="informasjonsvisning">
                    <Informasjonsvisning fetchContext={fetchContext} oppfolging={oppfolgingData} />
                </div>
            </React.Fragment>
        );
    }

    lagLayout(oppfolgingData: OppfolgingData, fetchContext: FetchContext) {
        const apen = this.props.context.apen;
        return (
            <React.Fragment key={this.props.fnr}>
                <Tilbakelenke enhet={this.props.enhet}/>
                <div
                    className={cls('persondetaljer', {
                        apen,
                        lukket: !apen
                    })}
                >
                    <Basisinfo fnr={this.props.fnr} oppfolging={oppfolgingData}/>
                    <UtvidetInfo fetchContext={fetchContext} isOpened={apen} oppfolging={oppfolgingData}/>
                </div>
            </React.Fragment>
        );
    }

     render() {

         const fetchContext: FetchContext = { fnr : this.props.fnr };

         const sourceConfig: SourceConfig<PersondetaljerData> = {
             feature: {
                 allwaysUseFallback: true,
                 fallback: { 'modia.layout_med_visittkort': false },
                 url: '/veilarbpersonflatefs/api/feature?feature=modia.layout_med_visittkort'
             },
             oppfolging: createOppfolgingDataSourceConfig(fetchContext)
         };

         const data = getData<PersondetaljerData>(sourceConfig);

         return (
             <Datafetcher data={data}>
                 {(personDetaljerData: PersondetaljerData) => {
                     return personDetaljerData.feature['modia.layout_med_visittkort'] ?
                         this.lagNyLayout(personDetaljerData.oppfolging, fetchContext) :
                         this.lagLayout(personDetaljerData.oppfolging, fetchContext);
                 }}
             </Datafetcher>
         );
    }
}

interface Props {
    fetchContext: FetchContext;
    isOpened: boolean;
    oppfolging: OppfolgingData;
}

function UtvidetInfo(props: Props) {

    const { isOpened, fetchContext, oppfolging } = props;

    return (
        <Collapse isOpened={isOpened} className="informasjonsvisning" hasNestedCollapse={true}>
            <Informasjonsvisning fetchContext={fetchContext} oppfolging={oppfolging} />
        </Collapse>
    );

}

export default withAppContext<AppProps>(AppContext, Persondetaljer);
