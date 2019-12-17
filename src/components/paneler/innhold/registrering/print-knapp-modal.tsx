import { Hovedknapp } from 'nav-frontend-knapper';
import React from 'react';

export function PrintKnappModal() {
	const printModal = () => {
		document.getElementById('modal-a11y-wrapper')!.style.display = 'none';
		window.print();
		document.getElementById('modal-a11y-wrapper')!.style.display = 'block';
	};

	return (
		<div className="personverninformasjon-modal__header">
			<Hovedknapp htmlType="button" onClick={printModal}>
				<span>Skriv ut</span>
			</Hovedknapp>
		</div>
	);
}
