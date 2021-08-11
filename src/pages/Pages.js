import React from "react";
import Lang from "../headbar/Lang";
import Logo from "../headbar/Logo";
import MessageButton from "../headbar/MessageButton";
import Menu from "../menu/Menu";

export default function Pages(props) {
    return (
        <div>
            <div className="row">
                <Logo/>
                <MessageButton />
                <Lang />
            </div>

            <Menu />
        </div>
    )
}