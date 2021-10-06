import React from "react";
import "../css/logo.css";
import { useSelector } from "react-redux";
export default function Logo(props) {
    const NAMESITE = useSelector((state) => state.getLogo);
    return (
        <div className="logo text-left row">
         <div className = "col-sm-2 pb-4"><img className = "img" width = "100%" src = "/img/icon/log.png" alt = ""/></div>
         <div  className = "col-sm pt-4">{NAMESITE.split(",").map((x,i)=><div key = {x}>{i === 0?<h5>{x}</h5>:<h1>{x}</h1>}</div>)}</div>
        </div>
    )
}