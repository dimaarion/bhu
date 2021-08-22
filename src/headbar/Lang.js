import React  from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {urlMdRu} from "../action";
import "../css/lang.css";
export default function Lang(props) {
const LANG = useDispatch();
const MENUID = useDispatch();

    return (
        
             <div className={`col-sm lang `}>
            <div className = "row">
                <div className={`col-2 fl ${urlMdRu(document.baseURI) === "ru"?'langActive':""}`} ><Link onClick = {()=>{{LANG({type:"LANG",lang:"ru"});MENUID({type:"MENUID",payload:1})}}} to = "/">ru</Link></div>
                <div className={`col-2 fl ${ urlMdRu(document.baseURI) === "md"?'langActive':""}`} ><Link onClick = {()=>{{LANG({type:"LANG",lang:"md"});MENUID({type:"MENUID",payload:2})}}} to = "/md">md</Link></div>
            </div>


       
        </div>
       
    )
}