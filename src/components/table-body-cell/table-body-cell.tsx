import { Component } from '@stencil/core';

@Component({
	tag: 'sfl-table-body-cell'
})
export class TableBodyCell {
	hostData() {
		return {
			class: 'py-4 px-4 align-middle',
			style: { display: 'table-cell' }
		};
	}
}
