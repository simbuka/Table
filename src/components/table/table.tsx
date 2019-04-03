import { Component, Element, Prop } from '@stencil/core';
import { Overlay } from './helpers/Overlay';
import { Loader } from './helpers/Loader';

@Component({
	tag: 'sfl-table',
	styleUrl: 'table.css'
})
export class Table {
	/**
	 * Tells if to show no results overlay
	 */
	@Prop() noResults: boolean = false;
	/**
	 * Tells if table is loading
	 */
	@Prop() loading: boolean = false;
	/**
	 * Amount of rows are shown in table body
	 */
	@Prop() bodyRowCount: number = 10;
	/**
	 * Body row height
	 */
	@Prop() bodyRowHeight: number = 50;

	@Element() element: HTMLElement;

	hostData() {
		return {
			class: 'relative block text-grey-darkest'
		};
	}

	render() {
		return [
			<table class="w-full bg-grey-lightest border-b border-grey-lighter">
				<slot />
			</table>,
			this.noResults && (
				<Overlay height={this.bodyRowHeight * this.bodyRowCount} />
			),
			this.loading && <Loader height={this.bodyRowHeight * this.bodyRowCount} />,
			<slot name="pagination" />
		];
	}
}
