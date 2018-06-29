// tslint:disable

const ytelsestatus: any = {
    oppfolgingskontrakter:
        [{
            innsatsgrupper: ["Spesielt tilpasset innsats"],
            status: "Aktiv",
        },
            {
                innsatsgrupper: ["Spesielt tilpasset innsats"],
                status: "Lukket",
            }],
    vedtaksliste:
        [{
            aktivitetsfase: 'Under arbeidsavklaring',
            fradato: {
                day: '19',
                month: '2',
                year: '2018',
            },
            status: "Iverksatt",
            tildato: {
                day: '12',
                month: '10',
                year: '2018'
            },
            vedtakstype: "Eksamensgebyr / Ny rettighet"
        }, {
            aktivitetsfase: null,
            fradato: {
                day: '19',
                month: '2',
                year: '2018',
            },
            status: "Iverksatt",
            tildato: null,
            vedtakstype: "Arbeidsavklaringspenger / Endring"
        }, {
            aktivitetsfase: "Under arbeidsavklaring",
            fradato: {
                day: '19',
                month: '2',
                year: '2018',
            },
            status: "Avsluttet",
            vedtakstype: "Arbeidsavklaringspenger / Ny rettighet"
        }],
    ytelser:
        [{
            datoFra: {
                day: '19',
                month: '2',
                year: '2018',
            },
            datoTil: null,
            status: 'Aktiv'
        },
            {
                datoFra: {
                    day: '19',
                    month: '3',
                    year: '2018',
                },
                datoTil: null,
                status: 'Inaktiv'
            }],
};

export default ytelsestatus;