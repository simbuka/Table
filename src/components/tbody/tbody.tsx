import { Component, Prop } from '@stencil/core';
import { Loader } from '../table/helpers/Loader';
import { Overlay } from '../table/helpers/Overlay';

@Component({
	tag: 'smb-tbody'
})
export class Tbody {
	/**
	 * Tells if to show loader
	 */
	@Prop() loading: boolean = false;
	/**
	 * Tells if to show no results overlay
	 */
	@Prop() noResults: boolean = false;
	/**
	 * Height for no results overlay
	 */
	@Prop() overlayHeight: number = 150;

	hostData() {
		return {
			class: 'relative block'
		};
	}

	render() {
		return [
			<slot />,
			this.loading && <Loader />,
			this.noResults && <Overlay height={this.overlayHeight} />
		];
	}
}
