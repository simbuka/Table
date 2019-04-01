import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { IHeaderColumn } from './IHeaderColumn';
import { IOnSortChange } from './IOnSortChange';

@Component({
	tag: 'sfl-table-header-cell'
})
export class TableHeaderCell {
	/**
	 * Cell key unique key
	 */
	@Prop() key!: number;
	/**
	 * Column data
	 */
	@Prop() column!: IHeaderColumn;
	/**
	 * Tells if cell is sortable
	 */
	@Prop() sortable: boolean = true;

	/**
	 * Emitted when sorting changes
	 */
	@Event() onSortChange: EventEmitter<IOnSortChange>;

	private handleClick() {
		this.onSortChange.emit({
			key: this.key
		});
	}

	hostData() {
		return {
			style: { display: 'table-cell' }
		};
	}

	render() {
		const icon = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				class={`h-2 ml-1 align-middle ${this.column.sort === 'none' &&
					'hidden'}`}
				style={{
					transform: this.column.sort === 'asc' ? 'rotate(180deg)' : ''
				}}
			>
				<switch>
					<g>
						<path d="M43.1 21.3L4.6 67.1c-4.9 5.8-.8 14.8 6.9 14.8h77c7.6 0 11.8-8.9 6.9-14.8L56.9 21.3c-3.6-4.2-10.2-4.2-13.8 0z" />
					</g>
				</switch>
			</svg>
		);

		return (
			<div
				class={`${
					this.sortable ? ' cursor-pointer select-none ' : ''
				} border-0 px-4 py-4 uppercase text-sm tracking-wide whitespace-no-wrap font-sans inline-block`}
				onClick={() => {
					this.handleClick();
				}}
			>
				<span class="align-middle font-bold">{this.column.name}</span> {icon}
			</div>
		);
	}
}
