import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './app/application';

import './mock';

ReactDOM.render(<Application />, document.getElementById('app') as HTMLElement);

// registerServiceWorker();
