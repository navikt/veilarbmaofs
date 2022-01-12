import React from 'react';
import { Button } from '@navikt/ds-react';

export function PrintKnappModal() {
	const printModal = () => {
		document.getElementById('modal-a11y-wrapper')!.style.display = 'none';
		window.print();
		document.getElementById('modal-a11y-wrapper')!.style.display = 'block';
	};

	return (
		<div className="personverninformasjon-modal__header">
			<Button variant="primary" type="button" onClick={printModal}>
				<span>Skriv ut</span>
			</Button>
		</div>
	);
}
