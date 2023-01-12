export interface SapperState {
    sizeInfo: any[],
    choosedSize: any,
    matrixInfo: any,
    statusInfo: any,
}

export enum SapperActionTypes {
    SET_SIZE = "SET_SIZE",
    CHANGE_STATUS = "CHANGE_STATUS",
    GENERATE_FIELD = "GENERATE_FIELD",
}

interface SetSizeAction {
    type: SapperActionTypes.SET_SIZE;
    payload: any[];
}

interface ChangeStatusAction {
    type: SapperActionTypes.CHANGE_STATUS;
    payload: any[];
}

interface GenerateFieldAction {
    type: SapperActionTypes.GENERATE_FIELD;
    payload: any;
}


export type SapperAction = SetSizeAction | ChangeStatusAction | GenerateFieldAction