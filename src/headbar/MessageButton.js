import React from "react";
import "../css/message.css";
import {urlMdRu} from "../action";
import Measure from "../svg/Measure";
export default function MessageButton(props) {
    return (
        <div className="col-sm justify-content-md-center  row">
            <div className="col-sm-8 pt-3 message">
               {urlMdRu(document.baseURI) === "ru"? 'Отправить заявку на замер':'Trimite o cerere de măsurare'}

                
            </div>
           
        </div>
    )
}