import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'smb-td'
})
export class Td {
	/**
	 * Tells if to put default padding of cell
	 */
	@Prop() noPadding: boolean = false;

	hostData() {
		return {
			class: `align-middle ${!this.noPadding && 'py-4 px-4'}`,
			style: { display: 'table-cell' }
		};
	}
}
