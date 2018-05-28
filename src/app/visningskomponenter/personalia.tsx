import * as React from 'react';
import {IArenaPersonInfo, ITPSPersonInfo} from "../datatyper";

export interface IPersonaliaInfo {
    arena: IArenaPersonInfo;
    tps: ITPSPersonInfo;
}

function Personalia(props: { data: IPersonaliaInfo }) {
    return (
        <>
            <p>Personalia her</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    );
}

export default Personalia;