import * as React from 'react'

import { guid } from 'nav-frontend-js-utils';

export interface Props {
    animate: boolean,
    speed: number,
    className: string,
    width: number,
    height: number,
    preserveAspectRatio: string,
    primaryColor: string,
    secondaryColor: string,
    primaryOpacity: number,
    secondaryOpacity: number,
    style: { [key: string]: any },
    uniquekey: string,
}

export const defaultProps = {
    animate: true,
    height: 130,
    preserveAspectRatio: 'xMidYMid meet',
    primaryColor: '#f0f0f0',
    primaryOpacity: 1,
    secondaryColor: '#e0e0e0',
    secondaryOpacity: 1,
    speed: 2,
    width: 400,
};

export type WrapProps = {
    children?: React.ReactNode,
} & Partial<Props>;

const notIE: boolean = window.navigator.userAgent.indexOf('Trident') === -1;

function Wrap(props: WrapProps) {
    const idClip = props.uniquekey ? `${props.uniquekey}-idClip` : guid()
    const idGradient = props.uniquekey ? `${props.uniquekey}-idGradient` : guid()

    return (
        <svg
            viewBox={`0 0 ${props.width} ${props.height}`}
            version="1.1"
            style={props.style}
            preserveAspectRatio={props.preserveAspectRatio}
            className={props.className}
        >
            <rect
                style={{ fill: `url(#${idGradient})`, maskType: 'alpha' }}
                clipPath={`url(#${idClip})`}
                mask={notIE ? `url(#myMask)` : undefined}
                x="0"
                y="0"
                width={props.width}
                height={props.height}
            />

            <defs>
                <clipPath id={idClip}>{props.children}</clipPath>
                <mask id="myMask">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#maskGradient)"  />
                    <linearGradient id="maskGradient">
                        <stop offset="0" stopColor="white" stopOpacity="1" />
                        <stop offset="0" stopColor="white" stopOpacity="0">
                            <animate
                                attributeName="offset"
                                from="0"
                                to="1"
                                dur="0.5s"
                                repeatCount="1"
                                fill="freeze"
                                id="show"
                            />
                            <animate
                                attributeName="stop-opacity"
                                from="0"
                                to="1"
                                dur="0.5s"
                                repeatCount="1"
                                fill="freeze"
                                begin="show.begin + 0.25s"
                            />
                        </stop>
                    </linearGradient>
                </mask>

                <linearGradient id={idGradient}>
                    <stop offset="0%" stopColor={props.primaryColor} stopOpacity={props.primaryOpacity}>
                        <animate
                            attributeName="offset"
                            from="-2"
                            to="1"
                            dur={`${props.speed}s`}
                            repeatCount="indefinite"
                        />
                    </stop>
                    <stop offset="50%" stopColor={props.secondaryColor} stopOpacity={props.secondaryOpacity}>
                        <animate
                            attributeName="offset"
                            from="-1.5"
                            to="1.5"
                            dur={`${props.speed}s`}
                            repeatCount="indefinite"
                        />
                    </stop>
                    <stop offset="100%" stopColor={props.primaryColor} stopOpacity={props.primaryOpacity}>
                        <animate
                            attributeName="offset"
                            from="-1"
                            to="2"
                            dur={`${props.speed}s`}
                            repeatCount="indefinite"
                        />
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    );
}

(Wrap as any).defaultProps = defaultProps;

export default Wrap