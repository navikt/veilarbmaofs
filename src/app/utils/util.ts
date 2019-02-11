export function isNullOrUndefined(param: string | object | null | undefined): boolean {
    return param === undefined || param === null;
}

// Midlertidig permanent hack for å skille ut "tips til deg:" som vi får fra jobbsøkerkompetanse i feltet raadIngress
// eksempel-tekst: Du sier at du har lite erfaring som jobbsøker. Vi vil oppfordre deg til å jobbe godt med søknadene dine. Vi gir deg følgende tips:
export function skillUtTipsTilDegFraTekst(tekst: string): string[] {
    const splittetTekst: string[] = tekst.split('. ');
    const tips: string = splittetTekst.pop() || '';
    const resten = splittetTekst.join('. ').concat('. ');
    return Array.from([resten, tips]);
}

export function omit<S>(obj: S, ...props: string[]) {
    return Object.keys(obj)
        .filter((key) => !props.includes(key))
        .reduce((acc, key) => {
            acc[key] = obj[key];
            return acc;
        }, {});
}
