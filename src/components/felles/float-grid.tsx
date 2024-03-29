import React from 'react';

interface FloatGridProps {
	columns: number;
	gap: number;
	children: React.ReactNode;
}

function FloatGrid({ columns, gap, children }: FloatGridProps) {
	// @ts-ignore
	const splitChildren = React.Children.map(children, (child, index) => ({ index, child })).reduce(
		(acc, { child, index }) => {
			const key = index % columns;
			// @ts-ignore
			const group = acc[key] || [];
			group.push(child);
			// @ts-ignore
			acc[key] = group;
			return acc;
		},
		{}
	);

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

	const columnsChildren = Object.keys(splitChildren).map(key => (
		<div key={key} style={divStyle}>
			{
				// @ts-ignore
				splitChildren[key]
			}
		</div>
	));

	return (
		<div className="floatgrid" style={containerStyle}>
			{columnsChildren}
		</div>
	);
}

export default FloatGrid;
