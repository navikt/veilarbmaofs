import * as React from 'react';
import ContentLoader from 'react-content-loader';

function Placeholder() {
    return (
        <ContentLoader height={46} width={934} primaryColor="#E9E7E7" secondaryColor="#C6C2BF">
            <rect x="0" y="0" rx="5" ry="5" width="902.375" height="16" />
        </ContentLoader>
    );
}

export default Placeholder;