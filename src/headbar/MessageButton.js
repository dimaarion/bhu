import React from "react";
import "../css/message.css";
import {urlMdRu} from "../action";
import Measure from "../svg/Measure";
import { Link } from "react-router-dom";
export default function MessageButton(props) {
    return (
        <div className={props.scroll === true?"messagescrollbox":"col-sm justify-content-md-center  row"}>
            <div className={props.scroll === true?"messagescroll":"col-sm-8 pt-3 message"}>
               <Link to ={ "/message/" + urlMdRu(document.baseURI)} >{urlMdRu(document.baseURI) === "ru"? 'Отправить заявку на замер':'Trimite o cerere de măsurare'}</Link>
            </div>
           
        </div>
    )
}