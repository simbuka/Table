import { Component, Prop } from '@stencil/core';
import { capitalize } from '../../utils/utils';

@Component({
	tag: 'sfl-table-body-cell'
})
export class TableBodyCell {
	/**
	 * Body cell value
	 */
	@Prop() value!: string;

	hostData() {
		return {
			class: 'py-4 px-4 align-middle',
			style: { display: 'table-cell' }
		};
	}

	render() {
		return capitalize(this.value);
	}
}
