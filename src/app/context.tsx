import * as React from 'react';

const state = {
    apen: false
};

const VisningsContext = React.createContext(state.apen);

export default VisningsContext;