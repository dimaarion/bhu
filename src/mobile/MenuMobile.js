import React, { useState,useEffect } from "react"
export default function MenuMobile(props) {
    const [aktive, setAktive] = useState({ r: "noActiveRect", b: "noActive" });
    const [width, setWidth] = useState({ r: "noActiveRect", b: "noActive" });




    function menuMobileDisplay(e, f) {
        let selector = props.selector ? props.selector : "menumobile";
        let menu = document.querySelector("." + selector + " ul");
        if (menu.style.display === "none") {
            menu.setAttribute("style", "display:block;");
            f({ r: "activeRect", b: "active" });
        } else {
            menu.setAttribute("style", "display:none;");
            f({ r: "noActiveRect", b: "noActive" });
        }


    }
    let scrollactiveMobLeft = "";
    let scrollactiveMob = "";
    let heightBtnLeft = "80px";
    if (props.scroll) {
        scrollactiveMob = " scrollactiveMobButtton";
        scrollactiveMobLeft = " scrollactivemobbuttonleft"
    } else {
        scrollactiveMob = "";
        scrollactiveMobLeft = "";
    }


    switch (props.type) {
        case "LEFT":
            return (
                <div className={"menu-left-btn " + aktive.b +  scrollactiveMobLeft}  onClick={(e) => menuMobileDisplay(e, setAktive)}>
                    <div className={"rect " + aktive.r}></div>
                    <div className={"rect " + aktive.r}></div>
                </div>);
        default:
            return (
                <div className={"menumobileButton " + aktive.b + scrollactiveMob} onClick={(e) => menuMobileDisplay(e, setAktive)}>
                    <div className={"rect " + aktive.r}></div>
                    <div className={"rect " + aktive.r}></div>
                    <div className={"rect " + aktive.r}></div>
                </div>

            )
    }

}