import React from "react";
import { useActions } from '../../../../hooks/useAction';
import { useRef } from 'react';
import { NameSize } from "./NameSize/NameSize";

export const ChooseSize: React.FC<any> = (props) => {
    const ref = useRef(document.createElement("select"));

    const { setSize, createField } = useActions();

    const chooseSizeOnChange = () => {
        let choosedSize = props.sizeInfo.filter((element: any) => element.id === JSON.parse(ref.current[ref.current.selectedIndex].id))[0];
        setSize(choosedSize);
        createField(choosedSize);
    }
    
    const options = props.sizeInfo.map((element: any) => <NameSize key={element.id} name={element.name} id={element.id} />)

    return (
        <select ref={ref} onChange={chooseSizeOnChange}>
            {options}
        </select>
    )
}