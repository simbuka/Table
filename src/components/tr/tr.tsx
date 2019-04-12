import { Component } from '@stencil/core';

@Component({
	tag: 'smb-tr'
})
export class Tr {
	hostData() {
		return {
			class: 'text-base border-0 bg-white font-sans flex'
		};
	}
}
