import React from 'react';
import { useRef } from 'react'
import { useEffect } from 'react';
import styles from './Field.module.scss';
import {Cell} from './Cell/Cell';
import { useActions } from '../../../hooks/useAction';

export const Field: React.FC<any> = (props) => {
    const ref = useRef(document.createElement("div"));
    ref.current.style.width = props.choosedSize.cssWidth;

    const { createField, changeStatus} = useActions();

    useEffect(() => {
        createField(props.choosedSize);
    }, [])

    const cells = props.matrixInfo.linearArray
                  .map((element: any, index: number) => <Cell key= { index + 1} 
                                                              statusInfo = { props.statusInfo } 
                                                              valueCell = { element } 
                                                              index = { index + 1}
                                                              matrixInfo = { props.matrixInfo}
                                                              choosedSize = {props.choosedSize}
                                                              refArray = {ref}/>)
    
    return (
        <div ref = {ref} className={styles.field} onContextMenu = {(e) => {e.preventDefault()}}>
            { cells }
        </div>
    )
}