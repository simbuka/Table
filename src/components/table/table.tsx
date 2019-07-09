import { Component, Host, h } from '@stencil/core';

@Component({
	tag: 'smb-table',
	styleUrls: ['table.css']
})
export class Table {
	render() {
		return (
			<Host class="relative block text-gray-800">
				<div class="w-full bg-gray-100 border-b border-gray-200">
					<slot />
				</div>
				<slot name="pagination" />
			</Host>
		);
	}
}
