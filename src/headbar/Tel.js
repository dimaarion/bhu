import React from "react";
import "../css/tel.css";
import TelScroll from "../svg/TelScroll";
export default function Tel(props) {


function strArr(t = "") {return  t !== null?t.split(","):[""]}
    return (
        <div className = "col-sm tel row">
        <div className = "pr-2"><TelScroll/></div> <div>{strArr(props.tel).map((x)=><div key = {x} className = "pr-2 text-left telList">{x}</div>)}</div> 
        </div>
    )
}