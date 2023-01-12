import React, { useEffect } from 'react';
import styles from './Cell.module.scss';
import {useRef} from 'react';

export const Cell = (props: any) => {
    const ref = useRef(document.createElement("div"));

    const cellOnClick = () => {
        
        if(ref.current.getAttribute('data-value') == '0') {
            ref.current.classList.add(styles.activated_cell);
        } else 
        if(ref.current.getAttribute('data-value') == 'true') {
            ref.current.classList.add(styles.bomb_img);
            
        } else {
            ref.current.innerText = ref.current.getAttribute('data-value')!;
            ref.current.classList.add(styles.activated_cell);
        }
    }

    return (
        <div className = {styles.cell} key = {props.index} data-value = { props.valueCell } ref = {ref} onClick = {cellOnClick}></div> 
    )
}