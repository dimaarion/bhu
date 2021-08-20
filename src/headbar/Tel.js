import React, { useEffect } from "react";
import "../css/tel.css";
export default function Tel(props) {


function strArr(t = "") {return  t !== null?t.split(","):[""]}
    return (
        <div className = "col-sm tel justify-content-md-center  pl-5">
          {strArr(props.tel).map((x)=><div key = {x} className = "col-sm text-left telList pl-3">{x}</div>)}
        </div>
    )
}