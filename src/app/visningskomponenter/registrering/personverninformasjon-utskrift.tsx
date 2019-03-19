import React, { useState } from 'react';
import { RegistreringsData } from '../../datatyper/registreringsData';
import ModalWrapper from 'nav-frontend-modal';
import { Flatknapp } from 'nav-frontend-knapper';
import { PersonverninformasjonSykmeldt } from './personverninformasjon-sykmeldt';
import { PersonverninformasjonManuell } from './personverninformasjon-manuell';
import './personverninformasjon.less';
import { ReactComponent as PrintIcon } from './printer.svg';
import { PrintKnappModal } from './print-knapp-modal';

ModalWrapper.setAppElement('#modal-a11y-wrapper');

export function PersonverninformasjonUtskrift(props: {registrering: RegistreringsData}) {
    const {type, registrering} = props.registrering;
    const erManuell = registrering && registrering.manueltRegistrertAv;

    if(!erManuell) {
        return null;
    }
    const ordinaerManuellRegistrering = type && type === 'ORDINAER';
    const sykmeldtManuellRegistrering = type && type === 'SYKMELDT';
    const [visPrintModal, setVisPrintModal] = useState(false);
    return (
        <div className="utskrift">
            <Flatknapp onClick={()=>setVisPrintModal(true)} htmlType="button" className="utskrift-knapp">
               <PrintIcon className="utskrift-knapp__ikon"/>
                Personverninformasjon, rettigheter og plikter
             </Flatknapp>
            <ModalWrapper
                className="personverninformasjon-modal"
                contentLabel="Vindu for att printe personvernsting" // TODO SKRIV NOE BEDRE HER
                isOpen={visPrintModal}
                onRequestClose={() => setVisPrintModal(false)}
                closeButton={true}
                portalClassName="veilarbmaofs"
            >
                <PrintKnappModal/>
                {(sykmeldtManuellRegistrering || true) && <PersonverninformasjonSykmeldt/>}
                {(ordinaerManuellRegistrering && false)  && <PersonverninformasjonManuell/>}
            </ModalWrapper>
        </div>
    );
}
