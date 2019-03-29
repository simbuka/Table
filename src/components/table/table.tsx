import { Component, Element } from '@stencil/core';

@Component({
	tag: 'sfl-table'
})
export class Table {
	@Element() element: HTMLElement;

	render() {
		this.element
			.querySelector('[slot="header"]')
			.setAttribute('class', 'border-b-2 border-grey-lighter');
		this.element
			.querySelector('[slot="header"]')
			.setAttribute('style', 'display: table-header-group');
		this.element
			.querySelector('[slot="body"]')
			.setAttribute('style', 'display: table-row-group');

		return (
			<table class="w-full bg-grey-lightest">
				<slot name="header" />
				<slot name="body" />
			</table>
		);
	}
}
