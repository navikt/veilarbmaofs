import * as React from 'react';
import Informasjonsbolk from "../informasjonsbolk";
import {ICVInfo} from "./cv";

function Beskrivelse(props: Pick<ICVInfo, 'beskrivelse'>) {
   return (
       <Informasjonsbolk header="Beskrivelse" {...props}>
           <div className="underinformasjon">
               {props.beskrivelse}
           </div>
       </Informasjonsbolk>
   );
}

export default Beskrivelse;