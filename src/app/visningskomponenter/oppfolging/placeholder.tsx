import * as React from 'react';
import ContentLoader from 'react-content-loader';

function Placeholder() {
    return (
        <ContentLoader height={100} width={934} primaryColor="#E9E7E7" secondaryColor="#C6C2BF">
            <rect x="0" y="16" rx="5" ry="5" width="219.59375" height="16" />
            <rect x="0" y="38" rx="5" ry="5" width="219.59375" height="16" />
            <rect x="227.59375" y="16" rx="5" ry="5" width="219.59375" height="16" />
            <rect x="227.59375" y="38" rx="5" ry="5" width="219.59375" height="16" />
            <rect x="455.1875" y="16" rx="5" ry="5" width="219.59375" height="16" />
            <rect x="455.1875" y="38" rx="5" ry="5" width="219.59375" height="16" />
            <rect x="682.78125" y="16" rx="5" ry="5" width="219.59375" height="16" />
            <rect x="682.78125" y="38" rx="5" ry="5" width="219.59375" height="16" />
        </ContentLoader>
    );
}

export default Placeholder;