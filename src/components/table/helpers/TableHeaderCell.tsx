import { FunctionalComponent } from '@stencil/core';
import { IHeaderColumn } from './IHeaderColumn';

export const TableHeaderCell: FunctionalComponent<{
	columns: Array<IHeaderColumn>;
	sortable?: boolean;
}> = ({ columns, sortable = false }) => {
	const handleSortChange = (element: HTMLElement, key: number) => {
		if (sortable) {
			element.dispatchEvent(
				new CustomEvent('onSortChange', {
					detail: { key },
					bubbles: true
				})
			);
		}
	};

	// TEMP
	const getSortingIcon = (direction: 'none' | 'asc' | 'desc') => (
		<div
			class="h-5"
			style={{
				display: 'inline-block',
				marginLeft: '5',
				transform: direction === 'desc' ? 'rotate(180deg)' : '',
				opacity: direction === 'none' ? '0' : '1'
			}}
		>
			\/
		</div>
	);
	// const getSortingIcon = (direction: 'none' | 'asc' | 'desc') => (
	// 	<sfc-icon
	// 		display="inline-block"
	// 		name="menu-down"
	// 		class="h-5"
	// 		style={{
	// 			marginLeft: '5',
	// 			transform: direction === 'desc' ? 'rotate(180deg)' : '',
	// 			opacity: direction === 'none' ? '0' : '1'
	// 		}}
	// 	/>
	// );

	const thStyle = `${
		sortable ? 'cursor-pointer ' : ''
	} border-0 px-4 pt-2 pb-3 uppercase text-sm text-grey-darkest tracking-wide whitespace-no-wrap bg-grey-lightest font-sans`;

	return [
		<tr class="border-b-2 border-grey-lighter text-left">
			{columns.map((column: IHeaderColumn, key: number) => (
				<th
					class={thStyle}
					onClick={event =>
						handleSortChange(event.target as HTMLElement, key)
					}
				>
					<span>{column.name}</span>
					{getSortingIcon(column.sort)}
				</th>
			))}
		</tr>
	];
};
