import React from 'react';
import { AsyncNAVSPA } from '../../utils/async-navspa';
import { useAppStore } from '../../stores/app-store';
import { TAG_APPLICATION_NAME, TAG_APPLICATION_URL } from '../../utils/konstanter';

interface TagViewSpaProps {
	fnr: string;
	view?: string;
}

export const TagView = () => {
	const { fnr } = useAppStore();
	return (
		<AsyncNAVSPA<TagViewSpaProps>
			fnr={fnr}
			view="TODO"
			applicationName={TAG_APPLICATION_NAME}
			applicationBaseUrl={TAG_APPLICATION_URL}
		/>
	);
};
