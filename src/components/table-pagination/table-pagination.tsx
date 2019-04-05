import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { IOnPageChange } from './IOnPageChange';

@Component({
	tag: 'sfl-table-pagination'
})
export class TablePagination {
	/**
	 * Text for total results found
	 */
	@Prop() foundText!: string;
	/**
	 * Tells if previous page button should be active
	 */
	@Prop() activePrevious: boolean = false;
	/**
	 * Tells if next page button should be active
	 */
	@Prop() activeNext: boolean = false;

	/**
	 * Emitted when clicked on previous or next page button
	 */
	@Event() onPageChange: EventEmitter<IOnPageChange>;

	private createButton({
		type,
		active
	}: {
		type: 'previous' | 'next';
		active: boolean;
	}) {
		return (
			<div
				class={`
					p-1 m-3 uppercase font-bold
                    ${active ? 'cursor-pointer hover:bg-grey-light' : 'opacity-50'}
                `}
				onClick={() => {
					if (active) {
						this.onPageChange.emit({ direction: type });
					}
				}}
			>
				{type}
			</div>
		);
	}

	render() {
		const previousButton = this.createButton({
			type: 'previous',
			active: this.activePrevious
		});
		const nextButton = this.createButton({
			type: 'next',
			active: this.activeNext
		});

		return (
			<div class="flex items-center align-middle text-center text-sm bg-grey-lightest border-grey-lighter border-t">
				{previousButton}
				<div class="flex-1 p-1">{this.foundText}</div>
				{nextButton}
			</div>
		);
	}
}
