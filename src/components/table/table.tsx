import { Component, Element, Prop } from '@stencil/core';
import { Overlay } from './helpers/Overlay';

@Component({
	tag: 'sfl-table'
})
export class Table {
	@Prop() noResults: boolean = false;
	@Prop() bodyRowCount: number = 10;
	@Prop() bodyRowHeight: number = 51;

	@Element() element: HTMLElement;

	hostData() {
		return {
			class: 'block text-grey-darkest'
		};
	}

	render() {
		this.element.querySelector('[slot="header"]').className +=
			'border-b-2 border-grey-lighter';
		(this.element.querySelector('[slot="header"]') as HTMLElement).style.display =
			'table-header-group';
		(this.element.querySelector('[slot="body"]') as HTMLElement).style.display =
			'table-row-group';

		return [
			<table class="w-full bg-grey-lightest">
				<slot name="header" />
				<slot name="body" />
			</table>,
			this.noResults && (
				<Overlay height={this.bodyRowHeight * this.bodyRowCount} />
			),
			<slot name="pagination" />
		];
	}
}
