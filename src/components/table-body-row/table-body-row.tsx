import { Component, Prop } from '@stencil/core';
import { IBodyRow } from './IBodyRow';

@Component({
	tag: 'sfl-table-body-row'
})
export class TableBodyRow {
	@Prop() row!: IBodyRow;

	hostData() {
		return {
			class: 'text-base border-grey-lighter border-0 border-b bg-white font-sans',
			style: { display: 'table-row' }
		};
	}

	render() {
		return [
			<td class="align-middle w-px whitespace-no-wrap">
				<div class="flex justify-between">
					<slot name="checkbox" />
				</div>
			</td>,
			this.row.values.map((value: string) => (
				<sfl-table-body-cell value={value} />
			)),
			<td class="align-middle w-px whitespace-no-wrap">
				<div class="flex justify-between">
					<slot name="buttons" />
				</div>
			</td>
		];
	}
}
