import React from 'react';
import styles from './Cell.module.scss';
import {useRef} from 'react';
import { useActions } from '../../../../hooks/useAction';

export const Cell = (props: any) => {
    const ref = useRef(document.createElement("div"));


    const { changeStatus } = useActions();

    ref.current.style.pointerEvents = props.statusInfo.status ? "all" : "none";

    const determineIndexes = (linearIndex: number, numbersRows: number) => {
        let indexRow = Math.floor(linearIndex / numbersRows);
        let indexColumn = linearIndex - indexRow * numbersRows;
        return {
            indexRow: indexRow,
            indexColumn: indexColumn,
            linearIndex: linearIndex,
        }
    }

    const openEmptyCells = (linearIndex: number, numbersRows: number, matrix: any) => {
        let indexes = determineIndexes(linearIndex, numbersRows);
        const arrRefCells = [...props.refArray.current.childNodes];
        const isOpenCell = createBoolArray(numbersRows);
        openZeros(numbersRows, arrRefCells, isOpenCell, matrix, indexes.indexColumn, indexes.indexRow, indexes.linearIndex);

    }

    const createBoolArray = (numbersRows: number) => {
        const openCells = new Array(numbersRows);

        for(let i = 0; i < openCells.length; i++) {
            openCells[i] = new Array(numbersRows).fill(false);
        }

        return openCells;
    }

    const openZeros = (numbersRows: number, arrRefCells: any, isOpenCell: any, matrix: any,
                       indexColumn: number, indexRow: number, linearIndex: number) => {

        if(indexRow === 0 && indexColumn === 0){
            if(matrix[indexRow][indexColumn + 1] !== true){
                arrRefCells[linearIndex + 1].classList.add(styles.activated_cell);
                if(matrix[indexRow][indexColumn + 1] === 0 && isOpenCell[indexRow][indexColumn + 1] === false){
                    isOpenCell[indexRow][indexColumn + 1] = true;
                    openZeros(numbersRows, arrRefCells, isOpenCell, matrix, indexColumn + 1, indexRow, linearIndex + 1)
                } else 
                if(matrix[indexRow][indexColumn + 1] === 1 && isOpenCell[indexRow][indexColumn + 1] === false){
                    isOpenCell[indexRow][indexColumn + 1] = true;
                    arrRefCells[linearIndex + 1].innerHTML = arrRefCells[linearIndex + 1].attributes.getNamedItem('data-value')?.value!;
                    openZeros(numbersRows, arrRefCells, isOpenCell, matrix, indexColumn + 1, indexRow, linearIndex + 1)
                }
            }

            if(matrix[indexRow + 1][indexColumn] !== true){
                arrRefCells[linearIndex + numbersRows].classList.add(styles.activated_cell);
                if(matrix[indexRow + 1][indexColumn] === 0 && isOpenCell[indexRow + 1][indexColumn] === false){
                    isOpenCell[indexRow + 1][indexColumn] = true;
                    openZeros(numbersRows, arrRefCells, isOpenCell, matrix, indexColumn, indexRow + 1, linearIndex + numbersRows)
                } else 
                if(matrix[indexRow + 1][indexColumn] === 1 && isOpenCell[indexRow + 1][indexColumn] === false){
                    isOpenCell[indexRow + 1][indexColumn] = true;
                    arrRefCells[linearIndex + numbersRows].innerHTML = arrRefCells[linearIndex + numbersRows].attributes.getNamedItem('data-value')?.value!;
                    openZeros(numbersRows, arrRefCells, isOpenCell, matrix, indexColumn, indexRow + 1, linearIndex + numbersRows)
                }
            }

            if(matrix[indexRow + 1][indexColumn + 1] !== true){
                arrRefCells[linearIndex + numbersRows + 1].classList.add(styles.activated_cell);
                if(matrix[indexRow + 1][indexColumn + 1] === 0 && isOpenCell[indexRow + 1][indexColumn + 1] === false){
                    isOpenCell[indexRow + 1][indexColumn + 1] = true;
                    openZeros(numbersRows, arrRefCells, isOpenCell, matrix, indexColumn + 1, indexRow + 1, linearIndex + numbersRows + 1)
                } else 
                if(matrix[indexRow + 1][indexColumn + 1] === 1 && isOpenCell[indexRow + 1][indexColumn + 1] === false){
                    isOpenCell[indexRow + 1][indexColumn + 1] = true;
                    arrRefCells[linearIndex + numbersRows + 1].innerHTML = arrRefCells[linearIndex + numbersRows + 1].attributes.getNamedItem('data-value')?.value!;
                    openZeros(numbersRows, arrRefCells, isOpenCell, matrix, indexColumn + 1, indexRow + 1, linearIndex + numbersRows + 1)
                }
            }
        } else 
        if(indexRow === numbersRows - 1 && indexColumn === 0){
            return;
        } else
        if(indexRow === numbersRows - 1 && indexColumn === numbersRows - 1){
            return;
        } else
        if(indexRow === 0 && indexColumn === numbersRows - 1){
            return;
        } else
        if(indexRow === 0){
            return;
        } else
        if(indexRow === numbersRows - 1){
            return;
        } else
        if(indexColumn === 0){
            return;
        } else
        if(indexColumn === numbersRows - 1){
            return;
        } else {

        }


    }

    //indexes = takeUpperRowIndex(indexes, matrix, numbersRows);

    // for(; indexes.indexRow < numbersRows; indexes.indexRow++){
    //     openLeftDirection(indexes, arrRefCells, matrix, numbersRows);
    //     openRightDirection(indexes, arrRefCells, matrix, numbersRows);
    //     indexes.linearIndex += numbersRows;
    //     if(indexes.indexRow + 1 === numbersRows)
    //         break;
    // }

    // if(l + numbersRows < arrRefCells.length){
    //     arrRefCells[l + numbersRows].classList.add(styles.activated_cell);
    // }
    // if(l - numbersRows > 0){
    //     arrRefCells[l - numbersRows].classList.add(styles.activated_cell);
    // }

    // const openLeftDirection = (indexes: any, arrRefCells: any, matrix: any, numbersRows: number) => {
    //     for(let j = indexes.indexColumn, l = indexes.linearIndex; j >= 0; j--, l--){
    //         if(j === 0){
    //             arrRefCells[l].classList.add(styles.activated_cell);
    //             break;
    //         } else {
    //             if(matrix[indexes.indexRow][j] === 0){
    //                 arrRefCells[l].classList.add(styles.activated_cell);
    //             }
    //             else {
    //                 arrRefCells[l].innerHTML = arrRefCells[l].attributes.getNamedItem('data-value')?.value!;
    //                 arrRefCells[l].classList.add(styles.activated_cell);
    //                 break;
    //             }
    //         }
    //     }
    // }

    // const openRightDirection = (indexes: any, arrRefCells: any, matrix: any, numbersRows: number) => {
    //     for(let j = indexes.indexColumn, l = indexes.linearIndex; j < numbersRows; j++, l++){
    //         if(j + 1 === numbersRows){
    //             arrRefCells[l].classList.add(styles.activated_cell);
    //             break;
    //         } else {
    //             if(matrix[indexes.indexRow][j] === 0){
    //                 arrRefCells[l].classList.add(styles.activated_cell);
    //             }
    //             else {
    //                 arrRefCells[l].innerHTML = arrRefCells[l].attributes.getNamedItem('data-value')?.value!;
    //                 arrRefCells[l].classList.add(styles.activated_cell);
    //                 break;
    //             }
    //         }
    //     }
    // }

    // const takeUpperRowIndex = (indexes: any, matrix: any, numbersRows: number) => {
    //     let indexRow = indexes.indexRow;
    //     let linearIndex = indexes.linearIndex;
    //     for(let j = indexes.indexColumn; indexRow >= 0; indexRow--) {
    //         if(matrix[indexRow][j] > 0 || indexRow === 0)
    //             break;
    //         linearIndex -= numbersRows;
    //     }
    //     return {
    //         indexRow: indexRow,
    //         indexColumn: indexes.indexColumn,
    //         linearIndex: linearIndex
    //     }
    // }

    const cellOnClick = () => {
        switch(JSON.parse(ref.current.attributes.getNamedItem('data-value')?.value!)) {
            case 0: 
                ref.current.classList.add(styles.activated_cell);
                openEmptyCells(props.index - 1, props.choosedSize.numbersRows, props.matrixInfo.matrix);
                break;
            case true: 
                ref.current.classList.add(styles.bomb_img);
                changeStatus({
                    status: false,
                    startTime: props.statusInfo.startTime,
                    endTime: new Date(),
                    elapsedTime: null,
                    user: props.statusInfo.user,
                    success: false,
                });
                break;
            default:
                ref.current.innerText = JSON.parse(ref.current.attributes.getNamedItem('data-value')?.value!);
                ref.current.classList.add(styles.activated_cell);
        }
    }

    return (
        <div className = {styles.cell} key = {props.index} data-value = { props.valueCell } ref={ref} onClick = {cellOnClick}></div> 
    )
}