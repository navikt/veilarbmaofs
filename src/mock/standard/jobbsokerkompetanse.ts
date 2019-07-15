// tslint:disable object-literal-sort-keys
import { JSONValue } from 'yet-another-fetch-mock';
import { KartleggingData } from '../../rest/datatyper/kartlegging';

const jobbsokerkompetanse: KartleggingData & JSONValue = {
    underOppfolging: false,
    oppsummering: null,
    oppsummeringKey: null,
    besvarelseDato: '2018-06-05T14:45:06.282+02:00',
    raad: [
        {
            raadKey: '3-1',
            raadTittel: 'Skriv søknad og CV',
            raadIngress: 'Du sier at du har lite erfaring som jobbsøker. Vi vil oppfordre deg til å jobbe godt med søknadene dine. Vi gir deg følgende tips:',
            raadAktiviteter: [
                {
                    tittel: 'Les stillingsannonsen nøye.',
                    innhold: '<p xmlns="">Se hva arbeidsgiveren spør etter. Marker nøkkelordene. Hva slags egenskaper, erfaringer og kompetanse har du som passer til nøkkelordene? Lag en liste du kan bruke når du skal skrive søknaden.</p>'
                },
                {
                    tittel: 'Ring kontaktpersonen.',
                    innhold: '<p xmlns="">Hvis du har gode spørsmål, kan du kontakte personen som er oppgitt I stillingsannonsen. Du viser at du er interessert i jobben, og får en mulighet til å gi et godt førsteinntrykk. Merk deg navnet på den du snakker med. Når du skriver søknaden kan du vise til denne samtalen.<br/>\n                        <br/>Ikke spør om ting du enkelt kan finne svar på selv. Ikke ring bare for å ringe.</p>'
                },
                {
                    tittel: 'Tilpass CV-en.',
                    innhold: '<p xmlns="">Skriv CV-en først, da er det lettere å skrive søknaden. CV-en må tilpasses jobben du søker på. Bruk tid på å formulere noen gode nøkkelkvalifikasjoner som viser at kompetansen din passer til akkurat denne stillingen. Hvis du søker på en annen stilling senere, må du spisse nøkkelkvalifikasjonene og kanskje endre rekkefølge, slik at de passer til jobben.  </p>\n                     <p xmlns="">CV-en bør være på maksimalt to sider. Hvis du sender med bilde, må det være profesjonelt.</p>\n                     <p xmlns="">Se våre eksempler på <a href="https://www-q0.nav.no/no/Person/Arbeid/Arbeidsledig+og+jobbsoker/Jobbsokertips/Eksempler+p%C3%A5+s%C3%B8knader+og+CV-er">CV-er</a>. På <a href="http://www.uio.no/studier/karriere/jobbsoking/cv-soknad/eksempler-cv-soknad.html"\n                           target="_blank">uio.no</a>, <a href="http://www.unginfo.oslo.no/?post_type=jobb&amp;p=717" target="_blank">unginfo.no</a> og <a href="http://cvnerden.no/cv-mal/" target="_blank">cvnerden.no</a> finner du også eksempler på CV-er. Se også flere <a href="https://www-q0.nav.no/no/Person/Arbeid/Arbeidsledig+og+jobbsoker/Jobbsokertips/Slik+lager+du+en+god+CV">tips til CV</a> og <a href="https://tjenester-q0.nav.no/veiviserarbeidssoker/sjekkliste/454210">huskeliste</a> når du skal søke på en konkret stilling.</p>'
                },
                {
                    tittel: 'Tilpass søknaden.',
                    innhold: '<p xmlns="">Du må tilpasse søknaden til jobben du søker på. Søknaden skal være et direkte svar på stillingsannonsen. Skriv alltid hvorfor du er motivert for stillingen, hvorfor du ønsker å jobbe for denne bedriften og hva du kan bidra med. Du trenger ikke nødvendigvis å fylle alle kravene i stillingsannonsen, de færreste gjør det. Noen krav kan være må-krav, andre bør-krav.</p>\n                     <p xmlns="">Se våre eksempler på <a href="https://www-q0.nav.no/no/Person/Arbeid/Arbeidsledig+og+jobbsoker/Jobbsokertips/Eksempler+p%C3%A5+s%C3%B8knader+og+CV-er">søknader</a>. Se også flere tips til <a href="https://www-q0.nav.no/no/Person/Arbeid/Arbeidsledig+og+jobbsoker/Jobbsokertips/Skriv+en+god+jobbsoknad">jobbsøknaden</a> og <a href="https://tjenester-q0.nav.no/veiviserarbeidssoker/sjekkliste/454210">huskeliste</a> når du skal søke på en konkret stilling.</p>'
                },
                {
                    tittel: 'Be om tilbakemelding på CV-en og søknaden.',
                    innhold: '<p xmlns="">Venner og kjente kan gi nyttige innspill på CV-en og søknaden din. Er det noe du kan forbedre?</p>'
                },
                {
                    tittel: 'Profesjonell hjelp til søknaden.',
                    innhold: '<p xmlns="">Det finnes profesjonelle som kan hjelpe deg med å skrive søknader og CV, hvis du har mulighet til å betale for en slik tjeneste. Søk på nettet.</p>'
                },
                {
                    tittel: 'Ekstra søknadstips for deg med lite jobberfaring.',
                    innhold: '<p xmlns="">Skriv en kort søknad, ikke prøv å framstå som du har mer erfaring enn det du har. Ha en tydelig strategi før du begynner å skrive - du må "selge inn" det som gjør at du er verdt å satse på.</p>\n                     <p xmlns="">Skriv om hva du ønsker å oppnå i jobben, om hvorfor du er spesielt motivert for å jobbe på denne arbeidsplassen, eller om kompetanse du har utenom arbeidslivet som gjør at du kan tilføre arbeidsplassen noe de ikke har fra før.</p>\n                     <p xmlns="">Få gjerne noen som selv har ansatt folk til å se over søknaden din.</p>\n                     <p xmlns="">Du kan også skille deg ut ved å lage en utradisjonell presentasjon av deg selv (se aktivitet om utradisjonell CV).</p>'
                },
                {
                    tittel: 'Ekstra CV-tips for deg med lite jobberfaring.',
                    innhold: '<p xmlns="">Selv om du ikke har hatt en jobb før, er det allikevel mye du kan skrive på CV-en. Arbeidserfaring kan være mer enn formelle jobber. Har du malt huset, vært hundelufter, sittet mye barnevakt, hatt arbeidsuke eller utplassering på skolen? Kanskje du også har klippet plen, vært med i elevrådet, arrangert noe på skolen eller i fritiden eller har du faste arbeidsoppgaver i hjemmet?         </p>\n                     <p xmlns="">Annen erfaring: Sett opp ulike ting som kan være relevant for jobben du søker på: Hvilke språk du snakker eller skriver, om du er god på data, om du kan spesielle programmer eller om du har du tatt kurs på skolen eller på fritiden.         </p>\n                     <p xmlns="">Fritidsinteresser: Dette punktet må ikke være med. Men har du plass kan du skrive kort om hva du driver med på fritiden din. Driver du med en lagsport, så er du sannsynligvis flink til å samarbeide, vant til å jobbe sammen mot et mål og er inkluderende. Liker du for eksempel å skrive, fotografere, tegne, danse eller har andre interesser, så kan du skrive det.</p>'
                }
            ]
        },
        {
            raadKey: '3-9',
            raadTittel: 'Burde være en tittel her ass',
            raadIngress: 'Du sier at du ikke har forsøkt å kontakte en arbeidsgiver direkte. Se tips til deg.',
            raadAktiviteter: []
        },
        {
            raadKey: '4-2',
            raadTittel: 'Forbered deg til intervjuet',
            raadIngress: 'Mange synes at intervju kan være litt skummelt og vanskelig. Det hjelper å forberede seg godt. Se tips til deg.',
            raadAktiviteter: [
                {
                    tittel: 'Forbered deg på intervjuspørsmål.',
                    innhold: '<p xmlns="">Mange spørsmål går igjen fra intervju til intervju. Noter hva du vil svare på <a href="https://www-q0.nav.no/no/Person/Arbeid/Arbeidsledig+og+jobbsoker/Jobbsokertips/Slik+forbereder+du+deg+til+jobbintervju">vanlige</a> og <a href="http://www.arbeidsom.no/jobbtips/forbered-deg-pa-de-uventede-intervjusporsmalene/"\n                           target="_blank">uventede</a> intervjuspørsmål. Er det et spørsmål du føler du ikke har et godt svar på, ta deg tid og svar så godt du kan. Det viktigste er at du er deg selv i intervjuet. Svar ut fra det du tenker og føler, legg vekt på det du kan og selg deg selv – ikke vær beskjeden. Hvis du viser at du er reflektert i et jobbintervju, er det et stort pluss.</p>'
                },
                {
                    tittel: 'Forbered presentasjon av deg selv.',
                    innhold: '<p xmlns="">Forbered en kort, muntlig presentasjon som viser hvem du er som person, dine personlige egenskaper og interesser. Legg vekt på det du ikke har skrevet i CV-en og søknaden, det som sier noe om deg som menneske.</p>'
                },
                {
                    tittel: 'Les papirene dine før intervjuet.',
                    innhold: '<p xmlns="">Gå gjennom stillingsannonsen, søknaden og CV-en din på nytt før intervjuet.</p>'
                }
            ]
        },
        {
            raadKey: '1-1',
            raadTittel: 'Beskriv kompetansen din',
            raadIngress: 'Mange tenker for smalt om sin egen kompetanse. Se tips til deg.',
            raadAktiviteter: [
                {
                    tittel: 'Beskriv din kompetanse.',
                    innhold: '<p xmlns="">Lag en oversikt over hvem du er som person. Hva er motivasjonen din for å søke jobber? Hva er kompetansen din og dine personlige egenskaper? Hva er dine styrker og hva er unikt ved deg? Se flere spørsmål som kan hjelpe deg å tenke i gjennom <a href="https://www-q0.nav.no/no/Person/Arbeid/Arbeidsledig+og+jobbsoker/Jobbsokertips/Hva+kan+du">hva som er din kompetanse</a>. <br/>\n                        <br/> I noen bransjer legger arbeidsgiveren stor vekt på hvilken kompetanse du har gjennom utdanning og fagopplæring. Det kan være alt fra yrkesfag på videregående til en grad fra høgskole eller universitet. I andre jobber blir det lagt mer vekt på praktiske erfaringer. Realkompetansen din, alle kunnskaper og ferdigheter du har, kan bidra til at du får jobben.<br/>\n                        <br/> Når du reflekterer over og blir trygg på egen kompetanse, blir det lettere å skrive gode søknader, og du er bedre forberedt til intervjuet. Les mer om <a href="https://www.uio.no/studier/karriere/jobbsoking/Dette-ser-arbeidsgiver-etter/kompetanse.html">kompetanse på uio.no</a>, og om <a href="https://www.kompetansenorge.no/realkompetanse/realkompetansevurdering/"\n                           target="_blank">realkompetansevurdering</a> hos Kompetanse Norge. </p>\n                     <p xmlns="">Lag en oversikt der du beskriver kompetansen din og dine personlige egenskaper. </p>'
                }
            ]
        }
    ],
    besvarelse: [
        {
            sporsmalKey: 'finn-spm-01',
            sporsmal: 'Hvor finner<br>du jobber?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [
                {
                    svarAlternativKey: 'finn-svar-0101',
                    svarAlternativ: 'Stillingssøk på nav.no eller finn.no'
                }
            ]
        },
        {
            sporsmalKey: 'finn-spm-02',
            sporsmal: 'Hvor ser du<br>etter jobber?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{svarAlternativKey: 'finn-svar-0205', svarAlternativ: 'I utlandet'}]
        },
        {
            sporsmalKey: 'finn-spm-03',
            sporsmal: 'Søker du på flere<br>type stillinger?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [
                {
                    svarAlternativKey: 'finn-svar-0303',
                    svarAlternativ: 'Jeg søker på alt jeg kommer over'
                }
            ]
        },
        {
            sporsmalKey: 'finn-spm-04',
            sporsmal: 'Hva slags ansettelse<br>ser du etter?',
            tipsKey: 'vikariat-deltid',
            tips: 'Et vikariat eller deltidsjobb kan føre til fast arbeid. Det er lettere å få en ny jobb når du allerede er i arbeid.',
            svarAlternativer: [{svarAlternativKey: 'finn-svar-0401', svarAlternativ: 'Fast'}]
        },
        {
            sporsmalKey: 'finn-spm-05',
            sporsmal: 'Hvor fornøyd er<br>du med måten du<br>leter etter jobb på?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{svarAlternativKey: 'finn-svar-0503', svarAlternativ: '3'}]
        },
        {
            sporsmalKey: 'cv-spm-01',
            sporsmal: 'Hvor har du<br>registrert CV-en din?',
            tipsKey: 'registrer-CV',
            tips: 'Hvis du registrerer CV-en din flere steder, er det større sjanse for at en arbeidsgiver vil finne deg.',
            svarAlternativer: [{svarAlternativKey: 'cv-svar-0107', svarAlternativ: 'Andre steder'}]
        },
        {
            sporsmalKey: 'cv-spm-02',
            sporsmal: 'Hvor synlig er du<br>for en arbeidsgiver som<br>leter etter deg?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{svarAlternativKey: 'cv-svar-0201', svarAlternativ: 'Lite synlig'}]
        },
        {
            sporsmalKey: 'cv-spm-03',
            sporsmal: 'Tilpasser du<BR>CV-en til hver enkelt<br>stillingsannonse?',
            tipsKey: 'tilpass-cv',
            tips: 'Husk å tilpasse CV-en etter hva slags jobb du søker. Du bør fremheve det som er relevant for stillingen.',
            svarAlternativer: [{svarAlternativKey: 'cv-svar-0303', svarAlternativ: 'Sender samme CV til alle'}]
        },
        {
            sporsmalKey: 'cv-spm-04',
            sporsmal: 'Hvor etterspurt<br>er kompetansen din på<br>arbeidsmarkedet?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{svarAlternativKey: 'cv-svar-0401', svarAlternativ: '1'}]
        },
        {
            sporsmalKey: 'cv-spm-05',
            sporsmal: 'Hvilken erfaring<br>har du med<br>å søke jobber?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{
                svarAlternativKey: 'cv-svar-0501',
                svarAlternativ: 'Fått tilbud om jobb gjennom nettverket mitt'
            }]
        },
        {
            sporsmalKey: 'soke-spm-01',
            sporsmal: 'Hvor mange stillinger<br>har du søkt siste året?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{svarAlternativKey: 'soke-svar-0101', svarAlternativ: 'Ingen'}]
        },
        {
            sporsmalKey: 'soke-spm-04',
            sporsmal: 'Tilpasser du søknaden<br>til hver enkelt stillingsannonse?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{svarAlternativKey: 'soke-svar-0403', svarAlternativ: 'Skreddersyr alle søknader'}]
        },
        {
            sporsmalKey: 'intervju-spm-01',
            sporsmal: 'Hvor trygg er du<br>i en intervjusituasjon?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{svarAlternativKey: 'intervju-svar-0101', svarAlternativ: '1'}]
        },
        {
            sporsmalKey: 'intervju-spm-02',
            sporsmal: 'Hvordan forbereder<br>du deg til intervju?',
            tipsKey: 'intervju-hvorfor-deg',
            tips: 'Arbeidsgiveren er opptatt av å høre om hvem du er og hva du kan tilføre bedriften. Forbered deg på å snakke om hvorfor akkurat du bør få jobben.',
            svarAlternativer: [{
                svarAlternativKey: 'intervju-svar-0201',
                svarAlternativ: 'Forbereder meg ikke, tar det som det kommer'
            }]
        },
        {
            sporsmalKey: 'intervju-spm-03',
            sporsmal: 'Hvor godt pleier du<br>å gjøre det på intervju?',
            tipsKey: 'intervju-trygg',
            tips: 'Når du er godt forberedt til intervjuet føler du deg tryggere og kan framstå som den du ønsker - den beste versjonen av deg selv! Øv deg på intervjusituasjonen.',
            svarAlternativer: [{svarAlternativKey: 'intervju-svar-0301', svarAlternativ: '1'}]
        },
        {
            sporsmalKey: 'intervju-spm-04',
            sporsmal: 'Hva har du gjort for<br>å øke sjansene dine<br>for å få en jobb?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{svarAlternativKey: 'intervju-svar-0403', svarAlternativ: 'Gått på jobbsøkerkurs'}]
        },
        {
            sporsmalKey: 'intervju-spm-05',
            sporsmal: 'Hvordan vurderer<br>du din egen innsats<br>som jobbsøker?',
            tipsKey: null,
            tips: null,
            svarAlternativer: [{
                svarAlternativKey: 'intervju-svar-0503',
                svarAlternativ: 'Kan gjøre en større innsats'
            }]
        }
    ],
    kulepunkter: [
        {
            kulepunktKey: 'kulepunkt-prioritet1',
            kulepunktPrioritet: 1,
            kulepunkt: 'Du tilpasser hver enkelt søknad til stillingen du søker på'
        },
        {
            kulepunktKey: 'kulepunkt-prioritet4',
            kulepunktPrioritet: 4,
            kulepunkt: 'Du søker jobber innenfor et større geografisk område'
        },
        {
            kulepunktKey: 'kulepunkt-prioritet8',
            kulepunktPrioritet: 8,
            kulepunkt: 'Du søker på flere typer jobber'
        }
    ]
};

export default jobbsokerkompetanse;
