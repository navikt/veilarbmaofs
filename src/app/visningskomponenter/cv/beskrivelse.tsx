import * as React from 'react';

import { Normaltekst } from 'nav-frontend-typografi';

import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Beskrivelse(props: Pick<ICVInfo, 'beskrivelse'>) {
    if (isNullOrUndefined(props.beskrivelse)) {
        return null;
    }

   return (
       <Informasjonsbolk header="Beskrivelse" {...props}>
           <Normaltekst className="underinformasjon">
               {props.beskrivelse}
           </Normaltekst>
       </Informasjonsbolk>
   );
}

export default Beskrivelse;