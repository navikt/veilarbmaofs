// import * as React from 'react';
//
// interface InterfaceHiddenIf {
//     hidden: boolean | Function
// }
//
// export default function hiddenIfHOC(WrappingComponent: React.ComponentClass | React.ComponentType) {
//
//     function hiddenIf({ hidden, ...props }: InterfaceHiddenIf) {
//         if (!fn(hidden)(props)) {
//             return React.createElement(WrappingComponent, props);
//         }
//         return null;
//     }
//
//     return hiddenIf;
// }
//
// export function fn(value: Function | boolean) {
//     return typeof value === 'function' ? value : () => value;
// }