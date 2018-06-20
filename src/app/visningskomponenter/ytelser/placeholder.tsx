import * as React from 'react';
import ContentLoader from './../../utils/content-loader';

function Placeholder() {
    return (
        <ContentLoader height={80} width={934} primaryColor="#E9E7E7" secondaryColor="#C6C2BF">
            <rect x="16" y="16" rx="5" ry="5" width="40" height="18" />
            <rect x="68" y="17" rx="5" ry="5" width="245.953125" height="16" />
        </ContentLoader>
    );
}

export default Placeholder;