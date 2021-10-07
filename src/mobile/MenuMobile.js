import React, { useState } from "react"
export default function MenuMobile(props) {
    const [aktive, setAktive] = useState({ r: "noActiveRect", b: "noActive" });
    function menuMobileDisplay(e, f) {
        let menu = document.querySelector(".menumobile ul");
        if (menu.style.display === "none") {
            menu.setAttribute("style", "display:block;");
            f({ r: "activeRect", b: "active" });
        } else {
            menu.setAttribute("style", "display:none;");
            f({ r: "noActiveRect", b: "noActive" });
        }


    }
    let scrollactiveMob = "";
    if(props.scroll){
        scrollactiveMob = " scrollactiveMobButtton";
    }else{
        scrollactiveMob = "";
    }
    switch (props.type) {
    case "LEFT":

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