import React from "react";
import Logo from "../headbar/Logo";
import MessageButton from "../headbar/MessageButton";
import Tel from "../headbar/Tel";
import Lang from "../headbar/Lang";
export default function HeadPage(props) {
    return (

        <div className="row">
            <div className="col-1"></div>
                <Logo />
                <MessageButton />
                <Tel tel = {props.tel}/>
                <Lang />
            <div className="col-1"></div>
        </div>



    )
}