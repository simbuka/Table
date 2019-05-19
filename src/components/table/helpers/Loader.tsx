import { FunctionalComponent } from '@stencil/core';

export const Loader: FunctionalComponent = () => (
	<div class="absolute inset-0 flex items-center align-middle z-10 text-center bg-white opacity-75">
		<div class="w-full">
			<svg viewBox="0 0 24 24" class="table-loader w-12 m-auto">
				<path
					class="fill-current"
					d="M12,4V2C6.48,2 2,6.48 2,12H4C4,7.58 7.58,4 12,4Z"
				/>
			</svg>
		</div>
	</div>
);
