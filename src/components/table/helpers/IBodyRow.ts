import { IRowButton } from './IRowButton';

export interface IBodyRow {
	instanceId: number;
	values: Array<string>;
	buttons: Array<IRowButton>;
}
