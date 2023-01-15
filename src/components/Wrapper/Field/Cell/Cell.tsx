import React from 'react';
import styles from './Cell.module.scss';
import {useRef} from 'react';
import { useActions } from '../../../../hooks/useAction';

export const Cell = (props: any) => {
    const ref = useRef(document.createElement("div"));
    const { changeStatus } = useActions();
    const arrRefCells = [...props.refArray.current.childNodes];

    ref.current.style.pointerEvents = props.statusInfo.status ? "all" : "none";
    if(props.statusInfo.success !== null)
        if(props.statusInfo.success){
            props.statusInfo.success = null;
            alert("u win!");
        }
        else {
            props.statusInfo.success = null;
            alert("u lost!");
        }

    const determineIndexes = (linearIndex: number, numbersRows: number) => {
        let indexRow = Math.floor(linearIndex / numbersRows);
        let indexColumn = linearIndex - indexRow * numbersRows;
        return {
            indexRow: indexRow,
            indexColumn: indexColumn,
            linearIndex: linearIndex,
        }
    }

    const openEmptyCells = (linearIndex: number, numbersRows: number, matrix: any, passageLinearArray: any) => {
        let indexes = determineIndexes(linearIndex, numbersRows);
        
        const isOpenCell = openZeros(numbersRows, createBoolArray(numbersRows, indexes.indexColumn, indexes.indexRow), matrix, indexes.indexColumn, indexes.indexRow);
        isOpenCell.forEach((element, index) => {
            if(element){
                indexes = determineIndexes(index, numbersRows);
                if(matrix[indexes.indexRow][indexes.indexColumn] > 0 && !arrRefCells[index].classList.contains(styles.flag)){
                    arrRefCells[index].innerText = arrRefCells[index].attributes.getNamedItem('data-value')?.value!;
                    arrRefCells[index].classList.add(styles.activated_number_cell);
                    
                } else
                if(matrix[indexes.indexRow][indexes.indexColumn] === true && !arrRefCells[index].classList.contains(styles.flag)){
                    arrRefCells[index].classList.add(styles.activeted_mine_cell);
                } else
                if(matrix[indexes.indexRow][indexes.indexColumn] === 0 && !arrRefCells[index].classList.contains(styles.flag)){
                    arrRefCells[index].classList.add(styles.activated_empty_cell);
                    passageLinearArray[index] = 0;
                }
            }
                
        })

    }

    const createBoolArray = (numbersRows: number, indexColumn: number, indexRow: number) => {
        const openCells = new Array(numbersRows);

        for(let i = 0; i < openCells.length; i++) {
            openCells[i] = new Array(numbersRows).fill(false);
            for(let j = 0; j < openCells[i].length; j++){
                if(indexRow === i && indexColumn === j)
                    openCells[i][j] = true;
            }
            
        }

        return openCells;
    }

    const openZeros = (numbersRows: number, isOpenCell: any, matrix: any,
                       indexColumn: number, indexRow: number) => {

        if(indexRow === 0 && indexColumn === 0){
            goByDirection(matrix, indexRow, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn + 1, isOpenCell, numbersRows)
        } else 
        if(indexRow === numbersRows - 1 && indexColumn === 0){
            goByDirection(matrix, indexRow, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn + 1, isOpenCell, numbersRows)
        } else
        if(indexRow === numbersRows - 1 && indexColumn === numbersRows - 1){
            goByDirection(matrix, indexRow, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn - 1, isOpenCell, numbersRows)
        } else
        if(indexRow === 0 && indexColumn === numbersRows - 1){
            goByDirection(matrix, indexRow, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn - 1, isOpenCell, numbersRows)
        } else
        if(indexRow === 0){
            goByDirection(matrix, indexRow, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn - 1, isOpenCell, numbersRows)
        } else
        if(indexRow === numbersRows - 1){
            goByDirection(matrix, indexRow, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn + 1, isOpenCell, numbersRows)
        } else
        if(indexColumn === 0){
            goByDirection(matrix, indexRow, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn, isOpenCell, numbersRows)
        } else
        if(indexColumn === numbersRows - 1){
            goByDirection(matrix, indexRow, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn - 1, isOpenCell, numbersRows)
        } else {
            goByDirection(matrix, indexRow + 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow + 1, indexColumn - 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn + 1, isOpenCell, numbersRows)
            goByDirection(matrix, indexRow - 1, indexColumn - 1, isOpenCell, numbersRows)
        }

        return [].concat(...openNumbersCells(isOpenCell, matrix))
    }

    const openNumbersCells = (isOpenCell: any, matrix: any) => {
        for(let i = 0; i < isOpenCell.length; i++){
            for(let j = 0; j < isOpenCell[i].length; j++){
                if(isOpenCell[i][j] && matrix[i][j] === 0){
                    if(isOpenCell[i].length > i + 1)
                        if(matrix[i + 1][j] > 0)
                           isOpenCell[i + 1][j] = true;

                    if(isOpenCell[i].length > i + 1)
                        if(matrix[i][j + 1] > 0)
                            isOpenCell[i][j + 1] = true;

                    if(isOpenCell[i].length > i + 1 && isOpenCell[i].length > j)
                        if(matrix[i + 1][j + 1] > 0)
                            isOpenCell[i + 1][j + 1] = true;

                    if(0 < i - 1)
                        if(matrix[i - 1][j] > 0)
                            isOpenCell[i - 1][j] = true;

                    if(0 < j - 1)
                        if(matrix[i][j - 1] > 0)
                          isOpenCell[i][j - 1] = true;

                    if(0 < i - 1 && 0 < j - 1)
                        if(matrix[i - 1][j - 1] > 0)
                            isOpenCell[i - 1][j - 1] = true;

                    if(isOpenCell[i].length > i + 1 && 0 < j - 1)
                        if(matrix[i + 1][j - 1] > 0)
                            isOpenCell[i + 1][j - 1] = true;

                    if(isOpenCell[i].length > j + 1 && 0 < i - 1)
                        if(matrix[i - 1][j + 1] > 0)
                            isOpenCell[i - 1][j + 1] = true;
                }     
            }
        }
        return isOpenCell;
    }

    const goByDirection = (matrix: any, indexRow: number, indexColumn: number, isOpenCell: any, numbersRows: number) => {
        if(matrix[indexRow][indexColumn] !== true){
                if((matrix[indexRow][indexColumn] === 0) && isOpenCell[indexRow][indexColumn] === false){
                    isOpenCell[indexRow][indexColumn] = true;
                    openZeros(numbersRows, isOpenCell, matrix, indexColumn, indexRow)
                } 
        }
    }

    const openMineCells = (matrix: any) => {
        for(let i = 0; i < matrix.length; i++)
            for(let j = 0; j < matrix[i].length; j++){
                let linearIndex = j + i * matrix.length;
                if(matrix[i][j] === true && !arrRefCells[linearIndex].classList.contains(styles.flag)){
                    console.log(matrix[i][j])
                    arrRefCells[linearIndex].classList.add(styles.activated_mine_cell);
                }
            }
    }

    const checkPassageGame = (passageLinearArray: any) => {
        if(passageLinearArray.filter((element: any) => (element === 0)).length === 
           arrRefCells.filter((element: any) => element.classList.contains(styles.activated_empty_cell)).length)
            return true;
        else return false;
    }

    return (
        <div 
            className = {styles.cell} 
            key = {props.index} 
            data-value = { props.valueCell } 
            ref={ref} 
            onClick = {() => {
                if(ref.current.classList.contains(styles.flag))
                    return false;
                switch(JSON.parse(ref.current.attributes.getNamedItem('data-value')?.value!)) {
                    case 0: 
                        ref.current.classList.add(styles.activated_empty_cell);
                        openEmptyCells(props.index - 1, props.choosedSize.numbersRows, props.matrixInfo.matrix, props.statusInfo.passageLinearArray);
                        if(checkPassageGame(props.statusInfo.passageLinearArray))
                            changeStatus({
                                status: false,
                                startTime: props.statusInfo.startTime,
                                endTime: new Date(),
                                elapsedTime: null,
                                user: props.statusInfo.user,
                                success: true,
                                passageLinearArray: props.statusInfo.passageLinearArray,
                            });
                        break;
                    case true: 
                        ref.current.classList.add(styles.activated_mine_cell);
                        openMineCells(props.matrixInfo.matrix)
                        changeStatus({
                            status: false,
                            startTime: props.statusInfo.startTime,
                            endTime: new Date(),
                            elapsedTime: null,
                            user: props.statusInfo.user,
                            success: false,
                            passageLinearArray: props.statusInfo.passageLinearArray,
                        });
                        break;
                    default:
                        ref.current.innerText = JSON.parse(ref.current.attributes.getNamedItem('data-value')?.value!);
                        ref.current.classList.add(styles.activated_number_cell);
                }
            }} 
            onContextMenu = {() => {
                console.log(ref.current.classList.contains("flag"))
                if(ref.current.classList.contains(styles.flag))
                    ref.current.classList.remove(styles.flag);
                else ref.current.classList.add(styles.flag);
            }}>

        </div> 
    )
}