import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { IOnPageChange } from './IOnPageChange';

@Component({
	tag: 'smb-table-pagination'
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
	 * Label for previous button
	 */
	@Prop() labelPrevious: string = 'Previous';
	/**
	 * Label for next button
	 */
	@Prop() labelNext: string = 'Next';

	/**
	 * Emitted when clicked on previous or next page button
	 */
	@Event() onPageChange: EventEmitter<IOnPageChange>;

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
					flex flex-1 p-4 uppercase font-bold text-grey-darkest
                    ${active ? 'cursor-pointer hover:text-grey-darker' : 'opacity-50'}
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
			class:
				'flex text-center text-sm bg-grey-lightest border-grey-lighter border-t'
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
					{this.foundText}
				</div>
			</div>,
			nextButton
		];
	}
}
