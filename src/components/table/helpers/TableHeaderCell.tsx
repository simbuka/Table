import { FunctionalComponent } from '@stencil/core';
import { IHeaderColumn } from './IHeaderColumn';

export const TableHeaderCell: FunctionalComponent<{
	columns: Array<IHeaderColumn>;
	sortable?: boolean;
}> = ({ columns, sortable = false }) => {
	// /**
	//  * Emits an event when sorting direction changes
	//  */
	// @Event() onSortChange: EventEmitter<IHeaderColumn>;

	const handleSortChange = (column: IHeaderColumn) => {
		if (sortable) {
			// TODO: fix this event?
			this.onSortChange.emit(column);
		}
	};

	const getSortingIcon = (direction: 'none' | 'asc' | 'desc') => (
		<sfc-icon
			display="inline-block"
			name="menu-down"
			class="h-5"
			style={{
				marginLeft: '5',
				transform: direction === 'desc' ? 'rotate(180deg)' : '',
				opacity: direction === 'none' ? '0' : '1'
			}}
		/>
	);

	const thStyle = `${
		sortable ? 'cursor-pointer ' : ''
	} border-0 px-4 pt-2 pb-3 uppercase text-sm text-grey-darkest tracking-wide whitespace-no-wrap bg-grey-lightest font-sans`;

	return [
		<tr class="border-b-2 border-grey-lighter text-left">
			{columns.map(column => (
				<th class={thStyle} onClick={() => handleSortChange(column)}>
					<span>{column.name}</span>
					{getSortingIcon(column.sort)}
				</th>
			))}
		</tr>
	];
};
