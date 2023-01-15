import {
    SapperAction,
    SapperActionTypes,
    SapperState
} from "../../types/sapper";

const initialState: SapperState = {
    sizeInfo: [
            {
                id: 1,
                name: "small",
                numbersRows: 9,
                numbersBombs: 10,
                cssWidth: "243px",
            },
            {
                id: 2,
                name: "medium",
                numbersRows: 16,
                numbersBombs: 40,
                cssWidth: "432px",
            },
            {
                id: 3,
                name: "large",
                numbersRows: 22,
                numbersBombs: 100,
                cssWidth: "594px",
            },
    ],
    choosedSize: {
        id: 1,
        name: "small",
        numbersRows: 9,
        numbersBombs: 10,
        cssWidth: "243px",
    },
    matrixInfo: {
        numbersCells: null,
        numbersEmptyCells: null,
        numbersSafeNumbers: null,
        numbersBombs: null,
        matrix: [],
        linearArray: [],
    },
    statusInfo: {
        status: false,
        startTime: null,
        endTime: null,
        elapsedTime: null,
        user: null,
        success: false,
        passageLinarArray: [],
    }, 
}

export const SapperReducer = (state = initialState, action: SapperAction): SapperState => {
    switch (action.type) {
        case SapperActionTypes.SET_SIZE:
            return {
                ...state,
                choosedSize: action.payload,
            };
        case SapperActionTypes.CHANGE_STATUS:
            return {
                ...state,
                statusInfo: action.payload,
            }
        case SapperActionTypes.GENERATE_FIELD:
            return {
                ...state,
                matrixInfo: action.payload,
            }
        default:
            return state;
    }
}