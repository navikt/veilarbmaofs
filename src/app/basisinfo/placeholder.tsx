import * as React from 'react';
import ContentLoader from './../utils/content-loader';

export function Placeholder() {
    return (
        <ContentLoader height={94} width={1120} primaryColor="#C6C2BF" secondaryColor="#E9E7E7">
            <rect x="0" y="0" rx="5" ry="5" width="32" height="26"/>
            <rect x="48" y="0" rx="5" ry="5" width="934.375" height="30"/>
            <rect x="48" y="37" rx="5" ry="5" width="87.46875" height="14"/>
            <rect x="1005.375" y="2" rx="5" ry="5" width="55.609375" height="14"/>
        </ContentLoader>
    );
}