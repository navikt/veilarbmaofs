import React from 'react';
import loadjs from 'loadjs';
import NAVSPA from '@navikt/navspa';

enum AssetLoadState {
	LOADING_ASSETS,
	ASSETS_LOADED,
	FAILED_TO_LOAD_ASSETS
}

interface AssetManifest {
	files: { [k: string]: string };
}

interface AsyncNAVSPAState {
	loadState: AssetLoadState;
}

export interface AsyncNAVSPAProps {
	applicationName: string;
	applicationBaseUrl: string;
	timeoutAfter?: number;
}

function joinUrlWithPath(url: string, path: string): string {
	const cleanedUrl = url.endsWith('/') ? url.substring(0, url.length - 1) : url;
	const cleanedPath = path.startsWith('/') ? path.substring(1, path.length) : path;
	return cleanedUrl + '/' + cleanedPath;
}

function createAssetManifestUrl(applicationBaseUrl: string): string {
	return joinUrlWithPath(applicationBaseUrl, 'asset-manifest.json');
}

function fetchAssetManifest(url: string): Promise<AssetManifest> {
	return fetch(url).then(res => res.json());
}

function extractPathsToLoadFromManifest(manifest: AssetManifest): string[] {
	const pathsToLoad: string[] = [];
	const unnecessaryFiles = ['runtime-main', 'service-worker', 'precache-manifest'];

	Object.entries(manifest.files).forEach(([_, path]) => {
		const isCssOrJs = path.endsWith('.js') || path.endsWith('.css');
		const isUnnecessary = unnecessaryFiles.find(filePath => path.includes(filePath));

		if (isCssOrJs && !isUnnecessary) {
			pathsToLoad.push(path);
		}
	});

	return pathsToLoad;
}

export class AsyncNAVSPA extends React.Component<AsyncNAVSPAProps, AsyncNAVSPAState> {
	private AsyncApp: any;

	constructor(props: AsyncNAVSPAProps) {
		super(props);
		this.state = { loadState: AssetLoadState.LOADING_ASSETS };
		this.AsyncApp = NAVSPA.importer(this.props.applicationName);

		fetchAssetManifest(createAssetManifestUrl(props.applicationBaseUrl))
			.then(manifest => {
				const pathsToLoad = extractPathsToLoadFromManifest(manifest);
				const urlsToLoad = pathsToLoad.map(path => joinUrlWithPath(props.applicationBaseUrl, path));

				loadjs(urlsToLoad, props.applicationName);
			})
			.catch(() => {
				this.setState({ loadState: AssetLoadState.FAILED_TO_LOAD_ASSETS });
			});

		loadjs.ready(props.applicationName, () => {
			this.setState({ loadState: AssetLoadState.ASSETS_LOADED });
		});
	}

	render() {
		if (this.state.loadState !== AssetLoadState.ASSETS_LOADED) {
			return null;
		}
		console.log('rendering...');
		return <this.AsyncApp />;
	}
}
