export interface IButtonHyperlink {
	buttonType: 'hyperlink';
	hoverText: string;
	doesUserHavePermissionToPress: boolean;
	hyperlink: string;
	icon: string; // IconName??
}

export interface IButtonDeletion {
	buttonType: 'deletion';
	hoverText: string;
	doesUserHavePermissionToPress: boolean;
	cancelDeletionButtonText: string;
	confirmDeletionButtonText: string;
	deletionConfirmationMessage: string;
	entityFormId: number;
}

export type IRowButton = IButtonDeletion | IButtonHyperlink;
