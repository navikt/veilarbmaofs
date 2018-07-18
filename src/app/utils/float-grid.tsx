import * as React from "react";

interface FloatGridProps {
    columns: number;
    gap: number;
    children: React.ReactNode;
}

function FloatGrid({columns, gap, children}: FloatGridProps) {
    const splitChildren = React.Children
        .map(children, (child, index) => ({index, child}))
        .reduce((acc, {child, index}) => {
            const key = index % columns;
            const group = acc[key] || [];
            group.push(child);
            acc[key] = group;
            return acc;
        }, {});

    const containerStyle = {
        marginLeft: gap / -2,
        marginRight: gap / -2
    };
    const divStyle = {
        float: 'left' as 'left',
        paddingLeft: gap / 2,
        paddingRight: gap / 2,
        width: `${100 / columns}%`
    };

    const columnsChildren = Object.keys(splitChildren)
        .map((key) => <div key={key} style={divStyle}>{splitChildren[key]}</div>);

    return (
        <div className="floatgrid clearfix" style={containerStyle}>
            {columnsChildren}
        </div>
    )
}

export default FloatGrid;
