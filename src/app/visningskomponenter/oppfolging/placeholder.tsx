import * as React from 'react';
import ContentLoader from './../../utils/content-loader';

function Placeholder() {
    return (
        <ContentLoader height={127} width={992} primaryColor="#E9E7E7" secondaryColor="#C6C2BF">
            <rect x="0" y="16" rx="5" ry="5" width="234" height="16" />
            <rect x="0" y="38" rx="5" ry="5" width="234" height="16" />
            <rect x="484" y="16" rx="5" ry="5" width="234" height="16" />
            <rect x="484" y="38" rx="5" ry="5" width="234" height="16" />
            <rect x="726" y="16" rx="5" ry="5" width="234" height="16" />
            <rect x="726" y="38" rx="5" ry="5" width="234" height="16" />
        </ContentLoader>
    );
}

export default Placeholder;