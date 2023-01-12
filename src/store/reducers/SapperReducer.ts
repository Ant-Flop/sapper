import {
    SapperAction,
    SapperActionTypes,
    SapperState
} from "../../types/todo";

const initialState: SapperState = {
    sizeInfo: [
            {
                id: 1,
                name: "small",
                countRows: 9,
                countBombs: 10
            },
            {
                id: 2,
                name: "medium",
                countRows: 16,
                countBombs: 40
            },
            {
                id: 3,
                name: "large",
                countRows: 22,
                countBombs: 100
            },
    ],
    choosedSize: [],

}

export const SapperReducer = (state = initialState, action: SapperAction): SapperState => {
    switch (action.type) {
        case SapperActionTypes.FORM_TOOLBAR:
            return {sizeInfo: [], choosedSize: []};
        default:
            return state;
    }
}