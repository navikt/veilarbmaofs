import React from 'react';
import ReactDOM from 'react-dom';
import NAVSPA from '@navikt/navspa';
import ModalWrapper from 'nav-frontend-modal';
import App from './app';
import env from './utils/environment';
import { fnr, enhet } from './mock/app';

ModalWrapper.setAppElement(document.getElementById('modal-a11y-wrapper'));

if (!(global as any)._babelPolyfill) {
	require('babel-polyfill');
}

if (env.isAppInDevelopment || env.isAppOnHeroku) {
	require('./mock');
	ReactDOM.render(<App fnr={fnr} enhet={enhet} />, document.getElementById('main'));
} else {
	NAVSPA.eksporter('veilarbmaofs', App);
}
