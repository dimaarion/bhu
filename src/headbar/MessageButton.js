import React, { useEffect, useState } from "react";
import "../css/message.css";
import {urlMdRu} from "../action";
import Measure from "../svg/Measure";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function MessageButton(props) {
    const[url,setUrl]=useState("ru");
    const lang = useSelector((store) => store.lang);
    
    useEffect(()=>{
        setUrl(urlMdRu(document.baseURI))
    },[document.baseURI, urlMdRu,lang])
    return (
        <div className={props.scroll === true?"messagescrollbox":"col-sm justify-content-md-center  row"}>
            <div className={props.scroll === true?"messagescroll":"col-sm-8 pt-3 message"}>
               <Link to ={ "/connect/message/" + url} >{url === "ru"? 'Отправить заявку на замер':'Trimite o cerere de măsurare'}</Link>
            </div>
           
        </div>
    )
}