import * as cls from 'classnames';
import * as React from 'react';
import Basisinfo from "./basisinfo/basisinfo";
import Knappelinje from './knappelinje/knappelinje';

import Innholdslaster from "../../components/innholdslaster";
import Informasjonsvisning from "./informasjonsvisning/informasjonsvisning";

import VisningsContext from '../context';

import './persondetaljer.less';

const TilbakeLenke = () =>
    <a href={`/veilarbportefoljeflatefs/tilbake?enhet=${1234 /* valgtEnhet */}`}>
        <i className="chevron--venstre"/>
        <span>Tilbake</span> {/* Todo: tekst */}
    </a>;

class Persondetaljer extends React.Component<{}, { apen: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            apen: false,
        };
        this.toggleApen = this.toggleApen.bind(this);
    }

    public toggleApen(): void {
        this.setState({
            apen: !this.state.apen
        })
    }

    public render() {
        const apen = this.state.apen;

        const ApneLukkeKnapp = () => {
            return (
                <button
                    className="undertekst toggle-persondetaljer"
                    aria-pressed={apen}
                    onClick={this.toggleApen}
                >
                    <span className="toggle-persondetaljer__tekst">
                        Detaljer { /*TODO: tekst */}
                    </span>
                    <i className={cls('chevron', {
                        'chevron--ned': !apen,
                        'chevron--opp': apen
                    })}/>
                </button>
            );
        };


        return (
            <div className="container">
                <TilbakeLenke/>
                <div
                    className={cls("panel--stor ", {
                            'apen': apen,
                            'lukket': !apen
                        }
                    )}
                >
                    <Innholdslaster avhengigheter={[]}>
                        <div className="persondetaljer">
                            <ApneLukkeKnapp/>
                            <Basisinfo />
                            <VisningsContext.Provider value={apen}>
                                {/*<Knappelinje hidden={!apen} />*/}
                                {apen && <Knappelinje />}
                                {apen && <Informasjonsvisning />}
                            </VisningsContext.Provider>
                        </div>
                    </Innholdslaster>
                </div>
            </div>
        )
    }
};

export default Persondetaljer;