import React from "react"
import { arrayCount } from "../action";
export default function Measure(props) {
let pX = 5;
let pY = 2;
    return (
        <svg width="78" height="78">
            <rect x="0" y="0" width="70" height="20" stroke="#000" fill="#ffffff" transform="rotate(45,0,30)" />
            {arrayCount(7).map((x) => <g key = {x + "g"}>
                <rect x={x * 10} y="0" width="1" height="5" stroke="#000" fill="#ffffff" transform="rotate(45,0,30)" />
                <rect x={x * 10 + 5} y="0" width="1" height="8" stroke="#000" fill="#ffffff" transform="rotate(45,0,30)" />
            </g>)}
            <rect x={-32} y={50} width="70" height="12" stroke="#000" fill="#ffffff" transform="rotate(-45,0,0)" />
            <polygon points={`${0 + pX},${71 + pY} ${7 + pX},${55 + pY} ${16 + pX},${66 + pY}`} />
            <rect x={35} y={50} width="5" height="12" stroke="#000" fill="#000" transform="rotate(-45,0,0)" />
        </svg>
    )
}