import { Component } from '@stencil/core';

@Component({
	tag: 'smb-table-body-row'
})
export class TableBodyRow {
	hostData() {
		return {
			class: 'text-base border-0 bg-white font-sans',
			style: { display: 'table-row' }
		};
	}
}
