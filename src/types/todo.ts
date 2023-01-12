export interface SapperState {
    sizeInfo: any[],
    choosedSize: any[],
}

export enum SapperActionTypes {
    FORM_TOOLBAR = "FORM_TOOLBAR"
}

interface FormToolbarAction {
    type: SapperActionTypes.FORM_TOOLBAR;
}

export type SapperAction = FormToolbarAction 