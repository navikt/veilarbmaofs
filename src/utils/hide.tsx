import * as React from 'react';

interface HideProps {
    if: boolean;
    children: React.ReactNode;
}

class Hide extends React.Component<HideProps> {
    render() { return this.props.if ? null : this.props.children; }
}

export default Hide;
