import { FunctionalComponent } from '@stencil/core';
import { capitalize } from '../../../utils/utils';
import { IBodyRow } from './IBodyRow';

export const TableBodyRow: FunctionalComponent<IBodyRow> = ({ values }) => {
	return (
		<tr class="text-base border-grey-lighter border-0 border-b text-grey-darkest bg-white font-sans">
			{values.map(value => {
				return <td class={`py-4 px-4 align-middle`}>{capitalize(value)}</td>;
			})}
		</tr>
	);
};
// ${
//     row.options && row.options.cellOptions
//         ? row.options.cellOptions[indexValue]
//         : ''
// }
