import { FunctionalComponent } from '@stencil/core';
import { TableBodyRow } from './TableBodyRow';
import { IBodyRow } from './IBodyRow';

export const TableBodyCell: FunctionalComponent<{ rows: Array<IBodyRow> }> = ({
	rows
}) => (
	<tbody>
		{rows.map((row: IBodyRow) => (
			<TableBodyRow {...row} />
		))}
	</tbody>
);
