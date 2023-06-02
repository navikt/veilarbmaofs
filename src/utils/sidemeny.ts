export interface SidemenyElement {
	name: string;
	id: string;
}

export const sidemenyElementId = {
	oppfolging: 'oppfolging',
	cv: 'cv',
	jobbonsker: 'jobbonsker',
	ytelser: 'ytelser',
	personalia: 'personalia',
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
		name: 'Jobbønsker',
		id: sidemenyElementId.jobbonsker
	},
	{
		name: 'Personalia',
		id: sidemenyElementId.personalia
	},
	{
		name: 'Registrering',
		id: sidemenyElementId.registrering
	},
	{
		name: 'Ytelser',
		id: sidemenyElementId.ytelser
	}
];

export const scrollTilElement = (query: string) => {
	document.querySelector(`${query}`)!.scrollIntoView({
		block: 'start',
		behavior: 'smooth'
	});
};
