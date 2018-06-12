import * as React from 'react';
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Beskrivelse(props: Pick<ICVInfo, 'beskrivelse'>) {
    if (isNullOrUndefined(props.beskrivelse)) {
        return null;
    }

   return (
       <Informasjonsbolk header="Beskrivelse" {...props}>
           <div className="underinformasjon">
               {props.beskrivelse}
           </div>
       </Informasjonsbolk>
   );
}

export default Beskrivelse;