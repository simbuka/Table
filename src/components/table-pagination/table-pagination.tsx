import { Component, Event, EventEmitter, Prop } from '@stencil/core';

import { IOnPageChange } from './IOnPageChange';

@Component({
	tag: 'smb-table-pagination'
})
export class TablePagination {
	/**
	 * Tells if previous page button should be active
	 */
	@Prop() activePrevious = false;
	/**
	 * Tells if next page button should be active
	 */
	@Prop() activeNext = false;
	/**
	 * Label for previous button
	 */
	@Prop() labelPrevious = 'Previous';
	/**
	 * Label for next button
	 */
	@Prop() labelNext = 'Next';

	/**
	 * Emitted when clicked on previous or next page button
	 */
	@Event() onPageChange!: EventEmitter<IOnPageChange>;

	private createButton({
		type,
		active,
		label
	}: {
		type: 'previous' | 'next';
		active: boolean;
		label: string;
	}) {
		return (
			<div
				class={`
					flex flex-1 p-4 uppercase font-bold text-gray-800
                    ${active ? 'cursor-pointer hover:text-gray-600' : 'opacity-50'}
                `}
				onClick={() => {
					if (active) {
						this.onPageChange.emit({ direction: type });
					}
				}}
			>
				<div class="flex m-auto align-middle items-center">{label}</div>
			</div>
		);
	}

	hostData() {
		return {
			class: 'flex text-center text-sm bg-gray-100 border-gray-200 border-t'
		};
	}

	render() {
		const previousButton = this.createButton({
			type: 'previous',
			active: this.activePrevious,
			label: this.labelPrevious
		});
		const nextButton = this.createButton({
			type: 'next',
			active: this.activeNext,
			label: this.labelNext
		});

		return [
			previousButton,
			<div class="flex flex-1 p-1">
				<div class="flex m-auto align-middle items-center">
					<slot />
				</div>
			</div>,
			nextButton
		];
	}
}
