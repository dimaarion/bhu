import React from "react";
import MessageButton from "../headbar/MessageButton";
import { strArr } from "../action";
import "../css/headscroll.css"
import TelScroll from "../svg/TelScroll";
import { useSelector } from "react-redux";
export default function HeadScroll(props) {
    const NAMESITE = useSelector((state) => state.getLogo);
    return (

        <header className="headscrollBox ">
            <div className="headscroll row">
                <div className="col-sm">
                    <div className="col-sm row">
                        <div className="col-sm-3"><img width="70px" src="/img/icon/log.png" alt="" /></div>
                        <div className="col-sm text-left">{NAMESITE.split(",").map((x,i) => <div className = {"logoText" + (i + 1)}>{x}</div>)}</div>
                    </div>
                </div>
                <div className="col-sm row">
                    <div className="col-sm text-right"><MessageButton scroll={props.scroll} /></div>
                    <div className="col-sm text-left">
                        <div className="teliconscroll"><TelScroll /></div>
                        {strArr(props.tel, ",").map((x, i) => <div key={i + "tel"} className="telscroll">{x}</div>)}
                    </div>
                </div>


            </div>

        </header>



    )
}