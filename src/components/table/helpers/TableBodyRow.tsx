import { FunctionalComponent } from '@stencil/core';
import { capitalize } from '../../../utils/utils';
import { IBodyRow } from './IBodyRow';
import { IRowButton } from './IRowButton';
import { RowButton } from './RowButton';

export const TableBodyRow: FunctionalComponent<IBodyRow> = ({
	instanceId,
	values,
	buttons
}) => {
	return (
		<tr class="text-base border-grey-lighter border-0 border-b text-grey-darkest bg-white font-sans">
			{values.map((value: string) => (
				<td class="py-4 px-4 align-middle">{capitalize(value)}</td>
			))}

			<td class="align-middle">
				<div class="flex justify-between">
					{buttons.map((button: IRowButton) => (
						<RowButton {...button} rowId={instanceId} />
					))}
				</div>
			</td>
		</tr>
	);
};
// ${
//     row.options && row.options.cellOptions
//         ? row.options.cellOptions[indexValue]
//         : ''
// }
