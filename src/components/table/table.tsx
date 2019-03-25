import { Component, Prop } from '@stencil/core';
import { TableHeaderCell } from './helpers/TableHeaderCell';
import { TableBodyCell } from './helpers/TableBodyCell';
import { IHeaderColumn } from './helpers/IHeaderColumn';
import { IBodyRow } from './helpers/IBodyRow';

@Component({
	tag: 'sfl-table'
})
export class Table {
	@Prop() columns: Array<string> = [];
	@Prop() rows!: Array<IBodyRow>;

	render() {
		return (
			<table class="w-full">
				<TableHeaderCell
					columns={this.columns.map(
						(name: string) =>
							({
								name,
								sort: 'asc'
							} as IHeaderColumn)
					)}
				/>
				<TableBodyCell rows={this.rows} />
			</table>
		);
	}
}
