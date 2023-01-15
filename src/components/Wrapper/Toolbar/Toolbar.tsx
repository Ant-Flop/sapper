import React from 'react';
import { ChooseSize } from './ChooseSize/ChooseSize';
import styles from './Toolbar.module.scss'
import { useActions } from '../../../hooks/useAction';

export const Toolbar: React.FC<any> = (props) => {
    const { changeStatus } = useActions();
    

    const startGameOnClick = () => {
        changeStatus({
            status: true,
            startTime: new Date(),
            endTime: null,
            elapsedTime: null,
            user: "Anthony",
            success: null,
            passageLinearArray: props.matrixInfo.linearArray
        });
    }

    return (
        <div className={ styles.toolbar }>
            <ChooseSize sizeInfo = {props.sizeInfo}/>
            <button onClick={startGameOnClick}>Start</button>
        </div>
    )
}