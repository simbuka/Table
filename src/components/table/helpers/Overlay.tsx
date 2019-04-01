import { FunctionalComponent } from '@stencil/core';

export const Overlay: FunctionalComponent<{
	height: number;
	content?: string | JSX.Element;
}> = ({ height, content = 'There are no results found.' }) => {
	return (
		<div
			style={{ height: `${height}px` }}
			class="text-center text-xl py-4 border-grey-lighter border-b flex items-center align-middle "
		>
			<div class="w-full">{content}</div>
		</div>
	);
};
