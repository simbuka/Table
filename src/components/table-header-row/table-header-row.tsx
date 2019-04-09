import { Component } from '@stencil/core';

@Component({
	tag: 'smb-table-header-row'
})
export class TableHeaderRow {
	hostData() {
		return {
			class: 'text-base border-grey-lighter border-b font-sans',
			style: { display: 'table-row' }
		};
	}
}
