import React from "react";
import MessageButton from "../headbar/MessageButton";
import { strArr } from "../action";
import "../css/headscroll.css"
import TelScroll from "../svg/TelScroll";
import { useSelector } from "react-redux";
import Menu from "../menu/Menu";
export default function HeadScroll(props) {
    const NAMESITE = useSelector((state) => state.getLogo);
    const SELECTGETMENU = useSelector((state) => state.getMenu);
    return (

        <header className="headscrollBox ">
            <div className="headscroll row">
                <div className="col-sm">
                    <div className="col-sm row" >
                        <div className="col-sm-3 "><img width="70px" src="/img/icon/log.png" alt="" /></div>
                        <div className="col-sm text-left ml-3 logoTextBox">{NAMESITE.split(",").map((x,i) => <div className = {"logoText" + (i + 1)}>{x}</div>)}</div>
                    </div>
                </div>
                <div className="col-sm row ml-1">
                    <div className="col-sm text-right"><MessageButton scroll={props.scroll} /></div>
                    <div className="col-sm text-left">
                        <div className="teliconscroll"><TelScroll /></div>
                        {strArr(props.tel, ",").map((x, i) => <div key={i + "tel"} className="telscroll">{x}</div>)}
                    </div>
                </div>


            </div>
                <Menu menu={SELECTGETMENU} url = {"/"} nav = "container-menuTop scroll" menuComp = "menuTop" position = "1" menuScrolls = "scrollMenuTop" lang={props.lang} scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />

        </header>



    )
}