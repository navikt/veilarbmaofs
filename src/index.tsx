import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application';
import NAVSPA from './utils/NAVSPA';
import env from './utils/environment';
import ModalWrapper from 'nav-frontend-modal';

ModalWrapper.setAppElement(document.getElementById('modal-a11y-wrapper'));

// tslint:disable
if (!(global as any)._babelPolyfill) {
    require('babel-polyfill')
}

if (env.isAppMocked || env.isAppOnHeroku) {
    ReactDOM.render( <Application fnr="10108000398" enhet="1234"/>, document.getElementsByClassName('main')[0]);
    //ReactDOM.render(<App fnr={fnr} enhet={enhet} />, document.getElementById('veilarbvedtaksstottefs'));
    require('./mock/index');
} else {
    NAVSPA.eksporter('veilarbmaofs', Application);

}

