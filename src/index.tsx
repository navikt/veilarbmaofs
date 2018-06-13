import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './app/application';
import NAVSPA from './NAVSPA';

// tslint:disable
if (!(global as any)._babelPolyfill) {
    require('babel-polyfill')
}
if (process.env.NODE_ENV === 'development') {
    require('./mock');
}
if (window.location.pathname.includes('veilarbmaofs')) {
    ReactDOM.render(<Application fnr="10108000398"/>, document.getElementById('app'));
}
// tslint:enable


NAVSPA.eksporter('veilarbmaofs', Application);