import React from 'react';
import Lenke from 'nav-frontend-lenker';

export function LastNedCV(props: {erManuell: boolean, lastNedCvLenke: string}) {

    const handleOnLastNedLenkeClicked = () => {
        (window as any).frontendlogger.event('veilarbmaofs.metrikker.last-ned-cv', {
            erManuell: props.erManuell
        }, {});
    };

    return (
        <Lenke onClick={handleOnLastNedLenkeClicked} href={props.lastNedCvLenke} className="last-ned-cv-lenke" target="_blank">
            <span>Last Ned CV</span>
        </Lenke>
    );
}
