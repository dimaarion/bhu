import React, { useEffect, useState} from "react";
import "../css/message.css";
import { Link } from "react-router-dom";
import {get} from "../action";
import MessageIcon from "../svg/MessageIcon";
import { useSelector } from "react-redux";


export default function MessageButton(props) {
    

    const NAMEMESSAGE = useSelector((state) => state.getNameMessage);
    useEffect(()=>{
      // get(setNameMessage,"messagename.php");
    },[])

    return (
        <div className={props.scroll === true?"messagescrollbox":"col-4"}>
            <div className={props.scroll === true?"messagescroll col-sm row":"message row"}>
               <div className = "pr-2"><MessageIcon/></div>
               <div><Link to ={ "/connect/message"} >{NAMEMESSAGE}</Link></div> 
            </div>
           
        </div>
    )
}