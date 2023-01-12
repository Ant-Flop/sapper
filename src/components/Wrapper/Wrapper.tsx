import React from 'react';
import styles from './Wrapper.module.scss';
import { Toolbar } from './Toolbar/Toolbar'
import { Field } from './Field/Field'
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Wrapper: React.FC = () => {
    const {sizeInfo, choosedSize} = useTypedSelector(state => state.sapper);
    return (
        <div className = { styles.wrapper }>
            <Toolbar sizeInfo = {sizeInfo}/>
            <Field />
        </div>
            
    )
}
