import AlertStripe from "nav-frontend-alertstriper";
import NavFrontendSpinner from 'nav-frontend-spinner'
import * as React from 'react';
import {Component, ReactChild, ReactNode} from "react";
import { STATUS } from "../redux/utils";


const array = (value: object) => (Array.isArray(value) ? value : [value]);
const harStatus = (...status: STATUS[]) =>
    (element: { status: string }) => array(status).toString().includes(element.status);
const noenHarFeil = (avhengigheter: Array<{}>) => avhengigheter && avhengigheter.some(harStatus(STATUS.ERROR));
const alleLastet = (avhengigheter: Array<{}>) => avhengigheter && avhengigheter.every(harStatus(STATUS.OK));

interface InnholdslasterProps {
    children: ReactNode | ReactChild;
    avhengigheter: Array<{ status: string }>;
    spinnerStorrelse?: 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
    feilmeldingsKomponent?: ReactNode | ReactChild;
}

class Innholdslaster extends Component<InnholdslasterProps>{
    public render() {
        const { avhengigheter, children, feilmeldingsKomponent, spinnerStorrelse } = this.props;
        if (alleLastet(avhengigheter)) {
            return children;
        } else if (noenHarFeil(avhengigheter)) {
            return feilmeldingsKomponent || (
                <AlertStripe type="advarsel">
                    Feil ved lasting av data
                </AlertStripe>
            );
        } else {
            return <NavFrontendSpinner type={spinnerStorrelse || "XXL"} />;
        }
    }
}

export default Innholdslaster;