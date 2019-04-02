import { Component } from '@stencil/core';

@Component({
	tag: 'sfl-table-body-row'
})
export class TableBodyRow {
	hostData() {
		return {
			class: 'text-base border-grey-lighter border-0 border-b bg-white font-sans',
			style: { display: 'table-row' }
		};
	}
}
