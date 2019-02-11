import * as React from 'react';
import { FetchContext, getConfig, InformasjonsElement } from '../../config';
import { AppContext, AppContextProp, withAppContext } from '../context';
import { OppfolgingData } from '../datatyper/oppfolging';
import './informasjonsvisning.less';
import { VisningsBolk } from './visningsbolk';

function lagVisningBolk<T>(context: AppContext) {
    return (element: InformasjonsElement<T>, index: number) => (
        <VisningsBolk {...element} key={index} context={context}/>
    );
}

interface Props {
    fetchContext: FetchContext;
    oppfolging: OppfolgingData;
}

class Informasjonsvisning extends React.Component<AppContextProp & Props> {
    public componentDidMount() {
        (window as any).frontendlogger.event('maofs.detaljer.v2', {}, {});
    }

    public render() {

        const { fetchContext, oppfolging, context } = this.props;

        const renderElementer: React.ReactNode[] = getConfig(fetchContext, oppfolging)
            .map(lagVisningBolk(context));

        return (
            <>
                {renderElementer}
            </>
        );
    }
}

export default withAppContext<Props>(AppContext, Informasjonsvisning);
