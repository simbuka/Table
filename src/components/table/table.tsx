import { Component, Prop, Listen, State, Event, EventEmitter } from '@stencil/core';
import { TableHeaderCell } from './helpers/TableHeaderCell';
import { TableBodyCell } from './helpers/TableBodyCell';
import { IHeaderColumn } from './helpers/IHeaderColumn';
import { IBodyRow } from './helpers/IBodyRow';
import { IOnReload } from './helpers/IOnReload';

@Component({
	tag: 'sfl-table'
})
export class Table {
	@Prop() sortable: boolean = true;
	@Prop() columns: Array<string> = [];
	@Prop() rows!: Array<IBodyRow>;

	@State() _columns: Array<IHeaderColumn>;
	@Event() onReload: EventEmitter<IOnReload>;

	@Listen('onSortChange')
	handleOnSortChange({ detail }: CustomEvent<{ key: number }>) {
		this._columns = this._columns.map(
			(column: IHeaderColumn, key: number) =>
				({
					...column,
					sort:
						detail.key == key
							? column.sort == 'desc'
								? 'asc'
								: 'desc'
							: 'none'
				} as IHeaderColumn)
		);

		this.onReload.emit({
			ascending: this._columns[detail.key].sort == 'asc',
			sortColumn: detail.key
		});
	}

	componentWillLoad() {
		this._columns = this.columns.map(
			(name: string) =>
				({
					name,
					sort: 'none'
				} as IHeaderColumn)
		);
	}

	render() {
		return (
			<table class="w-full">
				<TableHeaderCell sortable={this.sortable} columns={this._columns} />
				<TableBodyCell rows={this.rows} />
			</table>
		);
	}
}
