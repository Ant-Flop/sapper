import React from "react";
import { NameSize } from "./NameSize/NameSize";

export const ChooseSize: React.FC<any> = (props) => {

    const options = props.sizeInfo.map((option: any) => <NameSize key={option.id} name={option.name} id={option.id}/>)

    return (
        <select>
            {options}
        </select>
    )
}