import { FunctionalComponent } from '@stencil/core';
import { IButtonHyperlink } from '../IRowButton';
import { capitalize } from '../../../../utils/utils';

export const HyperlinkButton: FunctionalComponent<IButtonHyperlink> = ({
	hoverText,
	hyperlink
}) => {
	return (
		<a title={capitalize(hoverText)} href={hyperlink}>
			<svg viewBox="0 0 24 24" class="text-black hover:text-grey-darkest w-6">
				<path
					class="fill-current"
					d="M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
				/>
			</svg>
		</a>
	);
};
