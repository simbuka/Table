import { Component, Event, EventEmitter, Prop } from '@stencil/core';

import { IOnSortChange } from './IOnSortChange';

@Component({
	tag: 'smb-th'
})
export class Th {
	/**
	 * Cell unique key. Required if `sort` is used
	 */
	@Prop() key!: number;
	/**
	 * Sort type. Leave empty to disable sort
	 */
	@Prop() sort: 'none' | 'asc' | 'desc' | '' = '';
	/**
	 * Tells if to shrink to child's width
	 */
	@Prop() shrink = false;
	/**
	 * Tells if to add default spacing of cell
	 */
	@Prop() noSpacing = false;
	/**
	 * Tells if to add ellipsis if the content does not fit the container
	 */
	@Prop() truncate = false;

	/**
	 * Emitted when sorting changes
	 */
	@Event() onSortChange!: EventEmitter<IOnSortChange>;

	private handleClick() {
		this.onSortChange.emit({
			key: this.key
		});
	}

	hostData() {
		return {
			class: `
				${!this.shrink && 'flex-1'}
				${this.truncate && 'truncate'}
				flex justify-center border-b-2 border-grey-lighter bg-grey-lightest
			`
		};
	}

	render() {
		const icon = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				class={`
					h-2 ml-1 align-middle
					${this.sort === '' && 'hidden'}
					${this.sort === 'none' && 'opacity-0'}
				`}
				style={{
					transform: this.sort === 'asc' ? 'rotate(180deg)' : ''
				}}
			>
				<switch>
					<g>
						<path d="M43.1 21.3L4.6 67.1c-4.9 5.8-.8 14.8 6.9 14.8h77c7.6 0 11.8-8.9 6.9-14.8L56.9 21.3c-3.6-4.2-10.2-4.2-13.8 0z" />
					</g>
				</switch>
			</svg>
		);

		return (
			<div
				class={`${
					this.sort === '' ? '' : ' cursor-pointer select-none '
				} flex w-full justify-center flex-col ${!this.noSpacing &&
					'my-4 px-4'} uppercase text-sm font-bold`}
				onClick={() => {
					if (this.sort !== '') {
						this.handleClick();
					}
				}}
			>
				<div class={`${this.truncate && 'truncate'}`}>
					<span class="align-middle">
						<slot />
					</span>
					{icon}
				</div>
			</div>
		);
	}
}
