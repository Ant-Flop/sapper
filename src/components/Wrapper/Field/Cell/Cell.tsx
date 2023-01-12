import React from 'react';
import styles from './Cell.module.scss';
import {useRef} from 'react';
import { useActions } from '../../../../hooks/useAction';

export const Cell = (props: any) => {
    const ref = useRef(document.createElement("div"));
    const { changeStatus } = useActions();

    ref.current.style.pointerEvents = props.statusInfo.status ? "all" : "none";

    const cellOnClick = () => {
        switch(JSON.parse(ref.current.getAttribute('data-value')!)) {
            case 0: 
                ref.current.classList.add(styles.activated_cell);
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
                ref.current.innerText = ref.current.getAttribute('data-value')!;
                ref.current.classList.add(styles.activated_cell);
        }
    }

    return (
        <div className = {styles.cell} key = {props.index} data-value = { props.valueCell } ref = {ref} onClick = {cellOnClick}></div> 
    )
}