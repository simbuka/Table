import { Component } from '@stencil/core';

@Component({
	tag: 'smb-table',
	styleUrl: 'table.css'
})
export class Table {
	hostData() {
		return {
			class: 'relative block text-grey-darkest'
		};
	}

	render() {
		return [
			<div class="w-full bg-grey-lightest border-b border-grey-lighter">
				<slot />
			</div>,
			<slot name="pagination" />
		];
	}
}
