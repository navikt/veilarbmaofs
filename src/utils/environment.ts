class Environment {
	get isMocked(): boolean {
		return process.env.REACT_APP_DEV === 'true';
	}
}

const env = new Environment();

export default env;
