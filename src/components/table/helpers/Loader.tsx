import { FunctionalComponent } from '@stencil/core';

export const Loader: FunctionalComponent<{ height: number }> = ({ height }) => {
	return (
		<div
			style={{ marginTop: `-${height}px`, height: `${height}px` }}
			class="absolute w-full flex items-center align-middle text-center bg-white opacity-75"
		>
			<div class="w-full">
				<svg viewBox="0 0 24 24" class="table-loader w-12">
					<path
						class="fill-current"
						d="M12,4V2C6.48,2 2,6.48 2,12H4C4,7.58 7.58,4 12,4Z"
					/>
				</svg>
			</div>
		</div>
	);
};
