import React from 'react';
import Lenke from 'nav-frontend-lenker';

export function RedigerCV(props: {erManuell: boolean, cvRegistreringsLenke: string}) {
    if(!props.erManuell) {
        return null;
    }
    return (
        <Lenke href={props.cvRegistreringsLenke} className="endrecv-lenke" target="_blank">
            <span>Endre CV</span>
        </Lenke>
    );
}
