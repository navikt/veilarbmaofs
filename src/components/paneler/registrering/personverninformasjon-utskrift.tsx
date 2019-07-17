import React, { useState } from 'react';
import { RegistreringType } from '../../../rest/datatyper/registreringsData';
import ModalWrapper from 'nav-frontend-modal';
import { Flatknapp } from 'nav-frontend-knapper';
import PersonverninformasjonSykmeldt from './personverninformasjon-sykmeldt';
import PersonverninformasjonManuell from './personverninformasjon-manuell';
import { ReactComponent as PrintIcon } from './printer.svg';
import { PrintKnappModal } from './print-knapp-modal';
import './personverninformasjon.less';
import './print-knapp.less';
import Show from '../../felles/show';

function erSykmeldt(type?: RegistreringType) {
    return type && type === 'SYKMELDT';
}

function erOrdinaer(type?: RegistreringType) {
    return type && type === 'ORDINAER';
}

function PersonverninformasjonUtskrift(props: {type?: RegistreringType}) {
    const [visPrintModal, setVisPrintModal] = useState<boolean>(false);
    return (
        <>
            <Flatknapp
                onClick={() =>setVisPrintModal(true)}
                htmlType="button"
                className="utskrift-knapp btn--radius025"
            >
                <PrintIcon className="utskrift-knapp__ikon"/>
                Personverninformasjon, rettigheter og plikter
            </Flatknapp>
            <ModalWrapper
                portalClassName="veilarbmaofs"
                className="personverninformasjon-modal"
                contentLabel="PersonverninformasjonPrintModal" // TODO SKRIV NOE BEDRE HER
                isOpen={visPrintModal}
                onRequestClose={() => setVisPrintModal(false)}
            >
                <PrintKnappModal/>
                <Show if={erSykmeldt(props.type)}>
                    <PersonverninformasjonSykmeldt/>
                </Show>
                <Show if={erOrdinaer(props.type)}>
                    <PersonverninformasjonManuell/>
                </Show>
            </ModalWrapper>
        </>
    );
}

export default PersonverninformasjonUtskrift;
