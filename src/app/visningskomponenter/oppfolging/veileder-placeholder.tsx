import * as React from 'react';
import ContentLoader from './../../utils/content-loader';

function VeilederPlaceholder() {
    return (
        <ContentLoader height={100} width={934} primaryColor="#E9E7E7" secondaryColor="#C6C2BF">
            <rect x="0" y="16" rx="5" ry="5" width="219.59375" height="16" />
            <rect x="0" y="38" rx="5" ry="5" width="219.59375" height="16" />
        </ContentLoader>
    );
}

export default VeilederPlaceholder;