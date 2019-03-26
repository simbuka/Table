import { FunctionalComponent } from '@stencil/core';
import { HyperlinkButton } from './row-buttons/HyperlinkButton';
import { DeletionButton } from './row-buttons/DeletionButton';
import { IRowButton } from './IRowButton';

export const RowButton: FunctionalComponent<IRowButton & { rowId: number }> = props => (
	<div class="mx-2 my-2 align-middle cursor-pointer">
		{props.buttonType == 'hyperlink' ? (
			<HyperlinkButton {...props} />
		) : (
			<DeletionButton {...props} />
		)}
	</div>
);
