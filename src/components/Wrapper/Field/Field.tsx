import React, { useEffect } from 'react';
import styles from './Field.module.scss';
import {Cell} from './Cell/Cell';



const createField = (size: number, bombsAmount: number) => {

    let matrix = new Array(size);

    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let q = 0; q < bombsAmount;) {
        let i = Math.floor(Math.random() * size);
        let j = Math.floor(Math.random() * size);
        if (!matrix[i][j]) {
            q++;
            matrix[i][j] = true;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = numberDefinition(i, j, matrix, size);
            }
        }
    }

    return matrix;
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

export const Field: React.FC = () => {

    const Cells = (matrix: any) => {
        const cells = Array();
        for(let i = 0, index = 1; i < matrix.length; i++) {
            for(let j = 0; j < matrix[i].length; j++) {
                cells.push(<Cell key={index} valueCell = {matrix[i][j]} index = {index}/>)
                index++;
            }
        }
        return cells;
    }
    
    return (
        <div className={styles.field}>
            { Cells(createField(9, 15)) }
        </div>
    )
}