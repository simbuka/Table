import { IBodyRowButton } from './IBodyRowButton';

export interface IBodyRow {
	instanceId: number;
	values: Array<string>;
	buttons: Array<IBodyRowButton>;
}
