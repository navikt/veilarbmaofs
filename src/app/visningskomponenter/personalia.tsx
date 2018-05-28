import * as React from 'react';
import {IArenaPersonInfo, ITPSPersonInfo} from "../datatyper";

export interface IPersonaliaData {
    arena: IArenaPersonInfo;
    tps: ITPSPersonInfo;
}

interface IProps {
    data: IPersonaliaData;
}

function Personalia(props: IProps) {
    return (
        <>
            <p>Personalia her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Personalia;
