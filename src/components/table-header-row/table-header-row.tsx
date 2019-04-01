import { Component, Prop } from '@stencil/core';
import { IHeaderColumn } from '../table-header-cell/IHeaderColumn';

@Component({
	tag: 'sfl-table-header-row'
})
export class TableHeaderRow {
	/**
	 * Columns list
	 */
	@Prop() columns: Array<IHeaderColumn>;

	hostData() {
		return {
			class: 'text-base border-grey-lighter border-b font-sans',
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
			this.columns.map((column: IHeaderColumn, key: number) => (
				<sfl-table-header-cell key={key} column={column} />
			))
		];
	}
}
