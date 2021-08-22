import React from "react";
export default function Montaj(props) {
   
        return (
            <svg width="78" height="78">
                <rect x="0" y="0" width="70" height="15" stroke="#000" fill="#000" transform="rotate(45,0,30)" />
                <rect x="0" y="-7" width="20" height="30" stroke="#000" fill="#ffffff" transform="rotate(45,0,30)" />
                <rect x={-32} y={55} width="70" height="3" stroke="#000" fill="#ffffff" transform="rotate(-45,0,0)" />
                <rect x={15} y={50} width="30"  height="12" rx="4" stroke="#000" fill="#000" transform="rotate(-45,0,0)" />
                <rect x={-32} y={54} width="10"  height="5"  stroke="none" fill="#000" transform="rotate(-45,0,0)" />
            </svg>
        )
}
