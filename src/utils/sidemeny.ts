export interface SidemenyElement {
	name: string;
	id: string;
}

export const sidemenyElementId = {
	oppfolging: 'oppfolging',
	cv: 'cv',
	jobbprofil: 'jobbprofil',
	tilretteleggingsbehov: 'tilretteleggingsbehov',
	ytelser: 'ytelser',
	personalia: 'personalia',
	personaliaFraPdl: 'personaliaFraPdl',
	registrering: 'registrering'
};

export const sidemenyElementer: SidemenyElement[] = [
	{
		name: 'Oppfølging',
		id: sidemenyElementId.oppfolging
	},
	{
		name: 'CV',
		id: sidemenyElementId.cv
	},
	{
		name: 'Jobbprofil',
		id: sidemenyElementId.jobbprofil
	},
	{
		name: 'Behov for tilrettelegging',
		id: sidemenyElementId.tilretteleggingsbehov
	},
	{
		name: 'Ytelser',
		id: sidemenyElementId.ytelser
	},
	{
		name: 'Personalia',
		id: sidemenyElementId.personalia
	},
	{
		name: 'Personalia',
		id: sidemenyElementId.personaliaFraPdl
	},
	{
		name: 'Registrering',
		id: sidemenyElementId.registrering
	}
];

export const scrollTilElement = (query: string) => {
	document.querySelector(`${query}`)!.scrollIntoView({
		block: 'start',
		behavior: 'smooth'
	});
};
