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

	private arrowIcon(type: 'previous' | 'next') {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="block h-5 align-middle"
				style={{
					transform: type === 'previous' ? 'rotate(180deg)' : ''
				}}
			>
				<path
					class="fill-current"
					d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
				/>
			</svg>
		);
	}

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
					bg-white p-1 m-3 border-grey-light border rounded-full uppercase font-bold
                    ${active ? 'cursor-pointer hover:bg-grey-light' : 'opacity-50'}
                `}
				onClick={() => {
					if (this.activePrevious) {
						this.onPageChange.emit({ direction: type });
					}
				}}
			>
				{this.arrowIcon(type)}
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
