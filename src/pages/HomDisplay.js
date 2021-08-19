import React from "react";
import Icons from "../icons/Icons";
export default function HomDisplay(props) {
    return (
        <div>
             <img src={props.image} />
            <h2 className = "mt-3">{props.name}</h2>
            <Icons/>
        </div>
    )
}