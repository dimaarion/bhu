import React, { useEffect, useState } from "react";
import "../css/menu.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { urlMdRu } from "../action";
import HeadScroll from "../header/HeadScroll";
import MenuMobile from "../mobile/MenuMobile";
export default function Menu(props) {
    useEffect(() => {
        childRemove();
    }, [props])
    const MENUID = useDispatch();
    const lang = useSelector((state) => state.lang);
    const SELECTGETMENU = useSelector((state) => state.getMenu);





    function childRemove() {
        let ul = document.getElementsByClassName("navChild");
        ul = Array.from(ul)
        ul.map((x, i) => {

            if (x.innerHTML === "") {
                x.remove();
            }
            if (x.parentElement !== null && x.parentElement.className === "list") {
                x.parentElement.style.width = 186 + "px";
                x.parentElement.style.height = 38 + "px"
                x.style.marginLeft = x.parentElement.style.width;
                let h = Number.isInteger(x.parentElement.style.height.replace("px", ""));
                x.style.marginTop = - 32 + "px";
            }

        })
    }

    function isObj(obj) {
        if (Object.keys(obj).length === 0) {
            return false;
        } else {
            delete obj[0];

            return true;
        }
    }
    function cildMenu(props) {
        let a = [];
        for (let i = 0; i < props.menu.length; i++) {
            props.menu[i].child = [{}];
            for (let j = 0; j < props.menu.length; j++) {
                if (props.menu[i].menu_id === props.menu[j].parent_id) {
                    props.menu[i].child[j] = props.menu[j]
                }


            }
            if (props.menu[i].parent_id === "0") {
                a[i] = props.menu[i]
            }


        }
        return a;
    }
    function cildRecursion(c) {
        if (isObj(c.child)) {
            // console.log(c.child);
            return <ul className="navChild">{isObj(c.child) ? c.child.map((m2, i) => <li className="list" key={m2.alias + i}><Link to={`/${m2.alias}/${m2.lang}`}>{m2.names}</Link>{cildRecursion(m2)}</li>) : ""}</ul>
        }

    }

   
    let menuScrolls = "menu scrollactive";
    let menuMobile = "menumobile";
    let containerFluid = "container-fluid";
    return (
        <div>
            {props.resize === true?<MenuMobile/>:""}
            {props.scroll === true  ? <HeadScroll tel={props.tel} scroll = {props.scroll} /> : ""}
            <div className={props.resize === true?menuMobile:props.scroll === true  ? menuScrolls :"menu"} >
                <div className={props.resize === true?containerFluid:"container"}>
                    <ul className={props.resize === true?"nav flex-column ":"nav justify-content-center"}>
                        {cildMenu({ menu: SELECTGETMENU }).filter((f) => f.lang === urlMdRu(document.baseURI)).map((m, i) => <li className="nav-link text-center" key={m.names + i}><Link to={m.alias === "/" || m.alias === "md" ? m.alias === "/" ? m.alias : "/" + m.alias : "/" + m.alias + `/${m.lang}`}>{m.names}</Link>
                            {(isObj(m.child)) ? cildRecursion(m) : ""}
                        </li>)}
                    </ul>

                </div>

            </div>
        </div>
    )
}