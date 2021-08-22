import React from "react";
export default function Vector(props) {
    let cx = 50 + "%";
    let cy = 15;
    let cr = 7;
    let rx = 0;
    let ry = 14.5;
    
        return (
            <svg width="100%" height="30">
            <rect x = {rx} y = {ry} width = "100%" fill = "#066706" height = "1"/>
            <circle cx = {cx} cy = {cy}  r = {cr} strokeWidth = "4" fill = "#066706" stroke = "#fff" />
             
              
            </svg>
        )
}