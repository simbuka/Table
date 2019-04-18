import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'smb-td'
})
export class Td {
	/**
	 * Tells if to add default spacing of cell
	 */
	@Prop() noSpacing = false;
	/**
	 * Tells if to shrink to child's width
	 */
	@Prop() shrink = false;
	/**
	 * Tells if to add ellipsis if the content does not fit the container
	 */
	@Prop() truncate = false;

	hostData() {
		return {
			class: `
				${!this.shrink && 'flex-1'}
				${!this.noSpacing && 'p-4'}
				${this.truncate && 'truncate'}
				flex justify-center
			`
		};
	}

	render() {
		return (
			<div class="flex w-full justify-center flex-col">
				<div class={`${this.truncate && 'truncate'}`}>
					<slot />
				</div>
			</div>
		);
	}
}
