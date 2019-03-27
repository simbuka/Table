import { FunctionalComponent } from '@stencil/core';
import { IButtonDeletion } from '../IRowButton';
import { capitalize } from '../../../../utils/utils';

export const DeletionButton: FunctionalComponent<
	IButtonDeletion & { rowId: number }
> = props => {
	const handleClick = (element: HTMLElement) => {
		element.dispatchEvent(
			new CustomEvent('onRowButtonClick', {
				detail: {
					...props
				},
				bubbles: true
			})
		);
	};

	return (
		<div
			title={capitalize(props.hoverText)}
			onClick={event => handleClick(event.target as HTMLElement)}
		>
			<svg viewBox="0 0 24 24" class="text-black hover:text-grey-darkest w-6">
				<path
					class="fill-current"
					d="M9,3V4H4V6H5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
				/>
			</svg>
		</div>
	);
};
