import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { IOnPageChange } from './IOnPageChange';

@Component({
	tag: 'sfl-table-pagination'
})
export class TablePagination {
	@Prop() foundText!: string;
	@Prop() activePrevious: boolean = false;
	@Prop() activeNext: boolean = false;

	@Event() onPageChange: EventEmitter<IOnPageChange>;

	private arrowIcon(direction: 'left' | 'right') {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="h-5 align-middle"
				style={{
					transform: direction === 'left' ? 'rotate(180deg)' : ''
				}}
			>
				<path
					class="fill-current"
					d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
				/>
			</svg>
		);
	}

	render() {
		const buttonClass =
			'bg-white p-1 m-3 border-grey-light border rounded-full uppercase font-bold';

		const previousButton = (
			<div
				class={`
                    ${buttonClass}
                    ${
						this.activePrevious
							? 'cursor-pointer hover:bg-grey-light'
							: 'opacity-50'
					}
                `}
				onClick={() => {
					if (this.activePrevious) {
						this.onPageChange.emit({ direction: 'previous' });
					}
				}}
			>
				{this.arrowIcon('left')}
			</div>
		);

		const nextButton = (
			<div
				class={`
                    ${buttonClass}
                    ${
						this.activeNext
							? 'cursor-pointer hover:bg-grey-light'
							: 'opacity-50'
					}
                `}
				onClick={() => {
					if (this.activeNext) {
						this.onPageChange.emit({ direction: 'next' });
					}
				}}
			>
				{this.arrowIcon('right')}
			</div>
		);

		return (
			<div class="flex items-center align-middle text-center text-sm bg-grey-lightest border-grey-lighter border-t">
				{previousButton}
				<div class="flex-1 p-1">{this.foundText}</div>
				{nextButton}
			</div>
		);
	}
}
