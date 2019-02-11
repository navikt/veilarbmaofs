import Application from './app/application';
import NAVSPA from './NAVSPA';

// tslint:disable
if (!(global as any)._babelPolyfill) {
    require('babel-polyfill')
}

if (process.env.REACT_APP_MOCK === 'true') {
    require('./mock');
}
// tslint:enable

NAVSPA.eksporter('veilarbmaofs', Application);
