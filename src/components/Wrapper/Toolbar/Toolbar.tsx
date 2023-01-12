import React from 'react';
import { ChooseSize } from './ChooseSize/ChooseSize';
import styles from './Toolbar.module.scss'

export const Toolbar: React.FC<any> = (props) => {
    return (
        <div className={ styles.toolbar }>
            <ChooseSize sizeInfo = {props.sizeInfo}/>
            <button>Start</button>
        </div>
    )
}