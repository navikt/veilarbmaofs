import * as React from 'react';
import {ArenaPerson} from "../../datatyper/arenaperson";
import {isNullOrUndefined} from "../../utils/util";
import Informasjonsbolk from "../informasjonsbolk";

function Beskrivelse(props: Pick<ArenaPerson, 'beskrivelse'>) {
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