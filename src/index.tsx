import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import { Navspa } from '@navikt/navspa';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import App from './app';
import env from './utils/environment';
import { fnr, enhet } from './mock/app';
import { Modal } from '@navikt/ds-react';

Modal.setAppElement(document.getElementById('modal-a11y-wrapper'));

if (env.isMocked) {
	require('./mock');
	ReactDOM.render(<App fnr={fnr} enhet={enhet} />, document.getElementById('main'));
} else {
	Navspa.eksporter('veilarbmaofs', App);
}
