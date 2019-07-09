import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'smb',
	outputTargets: [
		{ type: 'dist' },
		{ type: 'docs-readme' },
		{
			type: 'www',
			serviceWorker: null
		}
	]
};
