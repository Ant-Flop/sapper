import { Dispatch } from 'redux';
import { SapperAction, SapperActionTypes } from '../../types/sapper';

export const setSize = (choosedSize: any) => {
    return (dispatch: Dispatch<SapperAction>) => {
        dispatch({type: SapperActionTypes.SET_SIZE, payload: choosedSize})
    }
}

export const changeStatus = (statusInfo: any) => {
    return (dispatch: Dispatch<SapperAction>) => {
        dispatch({type: SapperActionTypes.CHANGE_STATUS, payload: statusInfo})
    }
}

export const createField = (choosedSize: any) => {
    const matrixObject = createMatrix(choosedSize);
    return (dispatch: Dispatch<SapperAction>) => {
        dispatch({type: SapperActionTypes.GENERATE_FIELD, payload: {
            numbersCells: Math.pow(choosedSize.numbersRows, 2),
            numbersEmptyCells: matrixObject.numbersEmptyCells,
            numbersSafeNumbers: Math.pow(choosedSize.numbersRows, 2) - matrixObject.numbersEmptyCells - choosedSize.numbersBombs,
            numbersBombs: choosedSize.numbersBombs,
            matrix: matrixObject.matrix,
            linearArray: [].concat(...matrixObject.matrix),
        }})
    }
}

const createMatrix = (choosedSize: any) => {
    const matrix = new Array(choosedSize.numbersRows);
    let numbersEmptyCells = 0;
    for (let i = 0; i < choosedSize.numbersRows; i++) {
        matrix[i] = new Array(choosedSize.numbersRows);
        for (let j = 0; j < choosedSize.numbersRows; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let q = 0; q < choosedSize.numbersBombs;) {
        let i = Math.floor(Math.random() * choosedSize.numbersRows);
        let j = Math.floor(Math.random() * choosedSize.numbersRows);
        if (!matrix[i][j]) {
            q++;
            matrix[i][j] = true;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = numberDefinition(i, j, matrix, choosedSize.numbersRows);
                numbersEmptyCells++;
            }
        }
    }
    return {
        matrix: matrix,
        numbersEmptyCells: numbersEmptyCells,
    };
}

const numberDefinition = (indexR: number, indexC: number, arr: any, size: number) => {
    let counter = 0;
    for (let i = 0, r = indexR > 0 ? indexR - 1 : indexR; i < (indexR + 1 === size || indexR - 1 < 0 ? 2 : 3); i++, r++) {
        for (let j = 0, c = indexC > 0 ? indexC - 1 : indexC; j < (indexC + 1 === size || indexC - 1 < 0 ? 2 : 3); j++, c++) {
            if (arr[r][c] === true) {
                counter++;
            }
        }
    }
    return counter;
}
