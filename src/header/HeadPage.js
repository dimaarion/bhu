import React from "react";
import Logo from "../headbar/Logo";
import MessageButton from "../headbar/MessageButton";
import Tel from "../headbar/Tel";
import "../css/head.css";
import Menu from "../menu/Menu";
import {useSelector } from "react-redux";
export default function HeadPage(props) {
     const SELECTGETMENU = useSelector((state) => state.getMenu);

    return (

        <header className="row head">
            <div className="col-sm">
                <div className="messageTel row">
                    <div className = "col-sm">
                    </div>
                    <div className = "col-sm row">
                        <MessageButton />
                        <Tel tel={props.tel} />
                    </div>
                </div>
                <Logo />
                <Menu menu={SELECTGETMENU} url = {"/" + document.documentURI.split("/")[document.documentURI.split("/").length - 1]} nav = "container-menuTop" menuComp = "menuTop" position = "1" lang={props.lang} scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />

            </div>
        </header>



    )
}