import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import '@navikt/ds-css';
import { Navspa, AsyncNavspa } from '@navikt/navspa';
import App from './app';
import env from './utils/environment';
import { fnr, enhet } from './mock/app';
import { tilretteleggingsbehovSpaConfig } from './components/tilretteleggingsbehov-spa';
import { Modal } from '@navikt/ds-react';

Modal.setAppElement?.(document.getElementById('modal-a11y-wrapper'));

if (env.isMocked) {
	require('./mock');
	ReactDOM.render(<App fnr={fnr} enhet={enhet} />, document.getElementById('main'));
} else {
	AsyncNavspa.preload(tilretteleggingsbehovSpaConfig);
	Navspa.eksporter('veilarbmaofs', App);
}
