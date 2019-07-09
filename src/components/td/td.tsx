import { Component, Host, Prop, h } from '@stencil/core';

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

	render() {
		return (
			<Host
				class={{
					'flex justify-center': true,
					'flex-1': !this.shrink,
					'p-4': !this.noSpacing,
					truncate: this.truncate
				}}
			>
				<div class="flex w-full justify-center flex-col">
					<div class={{ truncate: this.truncate }}>
						<slot />
					</div>
				</div>
			</Host>
		);
	}
}
