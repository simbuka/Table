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

	const getSortingIcon = (direction: 'none' | 'asc' | 'desc') => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			class="h-2 ml-1 align-middle"
			style={{
				transform: direction === 'asc' ? 'rotate(180deg)' : '',
				opacity: direction === 'none' ? '0' : '1'
			}}
		>
			<switch>
				<g>
					<path d="M43.1 21.3L4.6 67.1c-4.9 5.8-.8 14.8 6.9 14.8h77c7.6 0 11.8-8.9 6.9-14.8L56.9 21.3c-3.6-4.2-10.2-4.2-13.8 0z" />
				</g>
			</switch>
		</svg>
	);

	const ths = columns.map(({ name, sort }: IHeaderColumn, key: number) => {
		const thClasses =
			'border-0 px-4 py-3 uppercase text-sm text-grey-darkest tracking-wide whitespace-no-wrap bg-grey-lightest font-sans';

		if (name == '') {
			return <th class={`${thClasses} w-px whitespace-no-wrap`} />;
		}

		return (
			<th
				class={`${sortable ? ' cursor-pointer select-none ' : ''} ${thClasses}`}
				onClick={event => handleSortChange(event.target as HTMLElement, key)}
			>
				<span class="align-middle">{name}</span>
				{getSortingIcon(sort)}
			</th>
		);
	});

	return (
		<thead>
			<tr class="border-b-2 border-grey-lighter text-left">{ths}</tr>
		</thead>
	);
};
