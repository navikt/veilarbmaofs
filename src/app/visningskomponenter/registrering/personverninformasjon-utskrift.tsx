import React, { useState } from 'react';
import { RegistreringsData } from '../../datatyper/registreringsData';
import ModalWrapper from 'nav-frontend-modal';
import { Knapp } from 'nav-frontend-knapper';
import { PersonverninformasjonSykmeldt } from './personverninformasjon-sykmeldt';
import { PersonverninformasjonManuell } from './personverninformasjon-manuell';

ModalWrapper.setAppElement(document.getElementById('app'));

export function PersonverninformasjonUtskrift(props: {registrering: RegistreringsData}) {
    const {type, registrering} = props.registrering;
    const manueltRegistrertAv = registrering && registrering.manueltRegistrertAv;
    const ordinaerManuellRegistrering = type && type === 'ORDINAER' && manueltRegistrertAv;
    const sykmeldtManuellRegistrering = type && type === 'SYKMELDT' && manueltRegistrertAv;

    if(!ordinaerManuellRegistrering || !sykmeldtManuellRegistrering) {
        return null;
    }
    const [visPrintModal, setVisPrintModal] = useState(false);
    return (
        <>
            <Knapp onClick={()=>setVisPrintModal(true)}>Print yada yda</Knapp>
            <ModalWrapper
                contentLabel="Vindu for att vise personvernsting"
                isOpen={visPrintModal}
                onRequestClose={() => setVisPrintModal(false)}
                closeButton={true}
                portalClassName="veilarbmaofs"
            >
                <div>
                    <header/>
                </div>
                <div className="section-to-print">
                    {sykmeldtManuellRegistrering && <PersonverninformasjonSykmeldt/>}
                    {ordinaerManuellRegistrering && <PersonverninformasjonManuell/>}
                </div>
                <button className="herps" onClick={()=>window.print()}>Skriv ut</button>
            </ModalWrapper>
        </>
    );
}
