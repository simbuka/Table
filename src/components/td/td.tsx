import { Component, Prop } from '@stencil/core';

@Component({
	tag: 'smb-td'
})
export class Td {
	/**
	 * Tells if to add default spacing of cell
	 */
	@Prop() noSpacing: boolean = false;
	/**
	 * Tells if to set flex to 1
	 */
	@Prop() shrink: boolean = false;

	hostData() {
		return {
			class: `
				${!this.shrink && 'flex-1'}
				${!this.noSpacing && 'p-4'}
				flex justify-center
			`
		};
	}

	render() {
		return (
			<div class="flex w-full justify-center flex-col">
				<slot />
			</div>
		);
	}
}
