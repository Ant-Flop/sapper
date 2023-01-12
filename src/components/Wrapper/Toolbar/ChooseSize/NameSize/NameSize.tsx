import React from "react";

export const NameSize: React.FC<any> = (props) => {
    return (
        <option key={props.id} value={props.name} id={props.id}>{props.name}</option>
    )
}