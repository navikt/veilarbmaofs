import Application from './app/application';
import NAVSPA from './NAVSPA';
import React from 'react';
import ReactDOM from 'react-dom';

// tslint:disable
if (!(global as any)._babelPolyfill) {
    require('babel-polyfill')
}

if (process.env.REACT_APP_MOCK === 'true') {
    require('./mock');
    ReactDOM.render( <Application fnr="10108000398" enhet="1234"/>, document.getElementsByClassName('main')[0])
} else {
    NAVSPA.eksporter('veilarbmaofs', Application);
}
