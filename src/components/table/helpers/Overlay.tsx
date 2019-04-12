import { FunctionalComponent } from '@stencil/core';

export const Overlay: FunctionalComponent<{
	height: number;
	content?: string | JSX.Element | HTMLElement;
}> = ({ height, content = 'There are no results found.' }) => {
	return (
		<div
			style={{ height: `${height}px` }}
			class="flex items-center align-middle text-center text-xl py-4 border-grey-lighter border-b bg-white"
		>
			<div class="w-full">{content}</div>
		</div>
	);
};
