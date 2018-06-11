import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './app/application';

// tslint:disable
if (!(global as any)._babelPolyfill){
    require('babel-polyfill')
}
// tslint:enable


import './mock';

ReactDOM.render(<Application />, document.getElementById('app') as HTMLElement);

// registerServiceWorker();
