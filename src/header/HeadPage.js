import React from "react";
import Logo from "../headbar/Logo";
import MessageButton from "../headbar/MessageButton";
import Tel from "../headbar/Tel";
import "../css/head.css";
export default function HeadPage(props) {
    return (

        <header className="row head">
            <div className="col-1"></div>
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
            </div>


            <div className="col-1"></div>
        </header>



    )
}