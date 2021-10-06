/* eslint-disable array-callback-return */
import React, { useEffect} from "react";
import "../css/menu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { urlMdRu } from "../action";
import HeadScroll from "../header/HeadScroll";
import MenuMobile from "../mobile/MenuMobile";

export default function Menu(props) {
    useEffect(() => {
        childRemove(document);
        affterIconDisplay(document);
    }, [props])
    useEffect(() => {

    }, [])

    const SELECTGETMENU = useSelector((state) => state.getMenu);

    function affterIconDisplay(d = document) {
        let li = d.getElementsByClassName("list");
        if (li !== null) {
            li = Array.from(li)
            li.map((x) => {
                Object.values(x.children).filter((f) => f.tagName === "UL").map((l) => {
                    l.parentElement.className = "list iconChild";
                });
            })
        }
    }

    function childRemove(d = document) {
        let ul = d.getElementsByClassName("navChild");
        if (ul !== null) {
            ul = Array.from(ul)
            ul.map((x, i) => {
                if (x.innerHTML === "") {
                    x.remove();
                }
            })
        }

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
            return <ul className="navChild">{isObj(c.child) ? c.child.map((m2, i) => <li className={isurl(props.url,m2.alias,"list menu_li_active","list") } key={m2.alias + i}><Link to={`/${m2.alias}/${m2.lang}`}>{m2.names}</Link>{cildRecursion(m2)}</li>) : ""}</ul>
        }

    }


    let menuScrolls = "menu scrollactive";
    let scrollactiveMob = "menumobile scrollactiveMob";
    let menuMobile = "menumobile ";
    let containerFluid = "container-fluid";
    let menuActive = "nav-link text-center menu_active";
    let menuNoActive = "nav-link text-center"
    function isurl(a, b, active, noActive) {
      return  a === b ? active : a === "/" + b ? active : a === "/" + b + "/ru" || a === "/" + b + "/md" ? active : noActive;
    }
    return (
        <nav className = "container-menu">
            {props.resize === true ? <MenuMobile scroll={props.scroll} /> : ""}
            
            <div className={props.resize === true ? props.scroll === true ? scrollactiveMob : menuMobile : props.scroll === true ? menuScrolls : "menu"} >
                <div className={props.resize === true ? containerFluid : "container"}>
                    <ul style={props.resize === true ? { display: "none" } : { display: "flex" }} className={props.resize === true ? "nav flex-column " : "nav justify-content-center"}>
                        {cildMenu({ menu: SELECTGETMENU }).filter((f) => f.lang === urlMdRu(document.baseURI)).map((m, i) => <li className={isurl(props.url,m.alias,menuActive,menuNoActive)} key={m.names + i}><Link to={m.alias === "/" || m.alias === "md" ? m.alias === "/" ? m.alias : "/" + m.alias : "/" + m.alias + `/${m.lang}`}>{m.names}</Link>
                            {(isObj(m.child)) ? cildRecursion(m) : ""}
                        </li>)}
                    </ul>

                </div>

            </div>
        </nav>
    )
}