import { Component, Host, h } from '@stencil/core';

@Component({
	tag: 'smb-tr'
})
export class Tr {
	render() {
		return (
			<Host class="text-base border-0 bg-white font-sans flex">
				<slot />
			</Host>
		);
	}
}
