import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import NAVSPA from './components/NAVSPA';
import env from './utils/environment';
import ModalWrapper from 'nav-frontend-modal';
import { fnr, enhet } from './mock/app';

ModalWrapper.setAppElement(document.getElementById('modal-a11y-wrapper'));

// tslint:disable
if (!(global as any)._babelPolyfill) {
    require('babel-polyfill')
}

if (env.isAppMocked || env.isAppOnHeroku) {
    require('./mock');
    ReactDOM.render(<App fnr={fnr} enhet={enhet}/>, document.getElementById('main'));
} else {
    NAVSPA.eksporter('veilarbmaofs', App);
}

