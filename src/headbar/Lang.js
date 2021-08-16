import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/lang.css";
export default function Lang(props) {
const LANG = useDispatch();
const SELECTLANG =useSelector((state)=>state.lang);
    return (
        <div className={`col-sm lang  ${SELECTLANG}`}>
            <div className = "row">
                <div className={`col-2 fl ${SELECTLANG === "ru"?'langActive':""}`} onClick = {()=>LANG({type:"LANG",lang:"ru"})}>ru</div>
                <div className={`col-2 fl ${SELECTLANG === "md"?'langActive':""}`}  onClick = {()=>LANG({type:"LANG",lang:"md"})}>md</div>
            </div>


        </div>
    )
}