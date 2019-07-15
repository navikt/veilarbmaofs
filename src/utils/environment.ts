class Environment {

    get isAppMocked() {
        return process.env.REACT_APP_MOCK;
    }

    get isAppOnHeroku() {
        return window.location.hostname.endsWith('herokuapp.com');
    }
}

const env = new Environment();

export default env;
