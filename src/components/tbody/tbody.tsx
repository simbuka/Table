import { Component, Host, Prop, h } from '@stencil/core';

import { Loader } from '../table/helpers/Loader';
import { Overlay } from '../table/helpers/Overlay';

@Component({
	tag: 'smb-tbody'
})
export class Tbody {
	/**
	 * Tells if to show loader
	 */
	@Prop() loading = false;
	/**
	 * Tells if to show no results overlay
	 */
	@Prop() noResults = false;
	/**
	 * No results text
	 */
	@Prop() noResultsContent: any = 'There are no results found.';
	/**
	 * Height for no results overlay
	 */
	@Prop() overlayHeight = 150;

	render() {
		return (
			<Host class="relative block">
				<slot />
				{this.loading && <Loader />}
				{this.noResults && (
					<Overlay
						height={this.overlayHeight}
						content={this.noResultsContent}
					/>
				)}
			</Host>
		);
	}
}
