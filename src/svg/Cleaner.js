import React from "react";
export default function Cleaner(props) {
    let pX = 0;
    let pY = -10;
        return (
            <svg width="78" height="78"> 
            <circle cx = {48 + pX} cy = {55 + pY}  r = {15} stroke = "#fff" />
              <rect x = {10 + pX} y = {55 + pY} width = {55} height = {13}  rx = {2} />
              <rect x = {15 + pX} y = {45 + pY} width = {15} height = {10}  rx = {2} />
              <rect x = {18 + pX} y = {48 + pY} width = {9} height = {5} fill = "#fff"  />
              <rect x = {31 + pX} y = {48 + pY} width = {34} height = {7}  rx = {2} />
              <rect x = {31 + pX} y = {48 + pY} width = {34} height = {1} fill = "#fff" />
              <circle cx = {20 + pX} cy = {70 + pY}  r = {5} stroke = "#fff" />
              <circle cx = {54 + pX} cy = {70 + pY}  r = {5} stroke = "#fff" />
              
            </svg>
        )
}