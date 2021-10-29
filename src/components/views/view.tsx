import React, { useEffect, useState } from 'react';
import cls from 'classnames';

interface ViewProps {
	hidden?: boolean;
	children?: any;
	className?: string;
}

export function View(props: ViewProps) {
	const [hasBeenViewedOnce, setHasBeenViewdOnce] = useState(false);

	useEffect(() => {
		if (!props.hidden) {
			setHasBeenViewdOnce(true);
		}
	}, [props.hidden]);

	if (!hasBeenViewedOnce) {
		return null;
	}

	return <div className={cls(props.className, { 'veilarbmaofs--hidden': props.hidden })}>{props.children}</div>;
}
