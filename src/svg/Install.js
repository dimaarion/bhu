import React from "react";
export default function Install(props) {
    let pX = 4;
    let pY = 4;
        return (
            <svg width="78" height="78">
                <rect x="25" y="3" width="42" height="50" stroke="#000" strokeWidth="2" fill="#fff"  />

                <circle cx = {40 + pX} cy ={25 + pY} r={6 +( pX / 2)}/>

                <rect x = {32 + pX} y = {24 + pY} width = {12 + pX} fill="#fff" stroke="none"  height = {0.5 } />
                <rect x = {31 + pX} y = {23.5 + pY} width = {14 + pX} fill="#000" stroke="none"  height = {0.5 } />

                <rect x = {34.5 + pX} y = {33.5 + pY} width = {10 + pX} height = {16 + pY}  fill="#000" stroke="none" />

                <rect x = {31.5 + pX} y = {48+ pY} width = {3 + pX} height = {9 + pY} rx = {2 + pX / 2}  fill="#000" stroke="none" transform="rotate(-45,28,32)"/>
                <rect x = {50.8 + pX} y = {-52 - pY}width = {3 + pX} height = {12 + pY} rx = {2 + pX / 2}  fill="#000" stroke="none" transform="rotate(75,0,0)"/>

                <rect x = {-20 - pX} y = {31 + pY} width ={3 + pX} height = {12 + pY} rx = {2 + pX / 2} fill="#000" stroke="none" transform="rotate(-62,0,0)"/>
                <rect x = {25 + pX} y = {33 + pY} width = {9 + pX} height = {3 + pY} rx = {2 + pX / 2}  fill="#000" stroke="none" />
                
                <rect x = {45 + pX} y = {40+ pY} width = {3 + pX} height = {15 + pY} rx = {2 + pX / 2}  fill="#000" stroke="none" transform="rotate(12)"/>
                <rect x = {30.5 + pX} y = {57.5 + pY} width = {3 + pX} height = {15 + pY} rx = {2 + pX / 2}  fill="#000" stroke="none" transform="rotate(-12)"/>
            </svg>
        )
}
