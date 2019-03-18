import React, { useState } from 'react';
import { RegistreringsData } from '../../datatyper/registreringsData';
import ModalWrapper from 'nav-frontend-modal';
import { Knapp } from 'nav-frontend-knapper';
import { PersonverninformasjonSykmeldt } from './personverninformasjon-sykmeldt';
import { PersonverninformasjonManuell } from './personverninformasjon-manuell';
import './personverninformasjon.less';
import PrintIcon from './printer.svg';
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
            <Knapp onClick={()=>setVisPrintModal(true)} htmlType="button" className="utskrift-knapp">
                <img src={PrintIcon} alt="" className="utskrift-knapp__ikon"/>
                Personverninformasjon, rettigheter og plikter
             </Knapp>
            <ModalWrapper
                className="personverninformasjon-modal"
                contentLabel="Vindu for att printe personvernsting" // TODO SKRIV NOE BEDRE HER
                isOpen={visPrintModal}
                onRequestClose={() => setVisPrintModal(false)}
                closeButton={true}
                portalClassName="veilarbmaofs"
            >
                <PrintKnappModal/>
                {sykmeldtManuellRegistrering && <PersonverninformasjonSykmeldt/>}
                {ordinaerManuellRegistrering && <PersonverninformasjonManuell/>}
            </ModalWrapper>
        </div>
    );
}
