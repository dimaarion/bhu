import React from "react";
import Logo from "../headbar/Logo";
import MessageButton from "../headbar/MessageButton";
import Tel from "../headbar/Tel";
import { strArr } from "../action";
import "../css/headscroll.css"
import TelScroll from "../svg/TelScroll";
import Lang from "../headbar/Lang";
import Logotype from "../svg/Logotype";
export default function HeadScroll(props) {
    return (

        <div className="headscrollBox">
            <div className="headscroll">
                <div className = "logoscroll"><Logotype scroll = {props.scroll}/></div>
                <MessageButton scroll = {props.scroll}/>
                <div className="teliconscroll"><TelScroll /></div>
                {strArr(props.tel, ",").map((x) => <div className="telscroll">{x}</div>)}
                <div className = "langscroll"><Lang/></div>
            </div>

        </div>



    )
}