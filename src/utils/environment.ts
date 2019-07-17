class Environment {

    get nodeEnv(): string | undefined {
        return process.env.NODE_ENV;
    }

    get isAppInDevelopment(): boolean {
        return this.nodeEnv === 'development';
    }

    get isAppOnHeroku(): boolean {
        return window.location.hostname.endsWith('herokuapp.com');
    }
}

const env = new Environment();

export default env;
