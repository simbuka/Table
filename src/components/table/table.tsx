import { Component } from '@stencil/core';

@Component({
	tag: 'smb-table',
	styleUrl: 'table.css'
})
export class Table {
	hostData() {
		return {
			class: 'relative block text-gray-800'
		};
	}

	render() {
		return [
			<div class="w-full bg-gray-100 border-b border-gray-200">
				<slot />
			</div>,
			<slot name="pagination" />
		];
	}
}
