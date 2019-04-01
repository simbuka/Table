import { Component, Prop } from '@stencil/core';
import { IBodyRow } from './IBodyRow';

@Component({
	tag: 'sfl-table-body-row'
})
export class TableBodyRow {
	/**
	 * Row data
	 */
	@Prop() row!: IBodyRow;

	hostData() {
		return {
			class: 'text-base border-grey-lighter border-0 border-b bg-white font-sans',
			style: { display: 'table-row' }
		};
	}

	private rowItem(slot: string) {
		return (
			<td class="align-middle w-px whitespace-no-wrap">
				<div class="flex justify-between">
					<slot name={slot} />
				</div>
			</td>
		);
	}

	render() {
		return [
			this.rowItem('checkbox'),
			this.row.values.map((value: string) => (
				<sfl-table-body-cell value={value} />
			)),
			this.rowItem('buttons')
		];
	}
}
