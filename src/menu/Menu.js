import React, { useEffect } from "react";
import "../css/menu.css";
import { Link } from "react-router-dom";
export default function Menu(props) {
    
    useEffect(()=>{
        childRemove();
    },[props])

   function childRemove() {
        let ul =  document.getElementsByClassName("navChild");
        ul = Array.from(ul)
        ul.map((x)=>{
           if( x.innerHTML === ""){
               x.remove();
           }
        })
   }

    function isObj(obj) {
        if (Object.keys(obj).length === 0) {
            return false;
        } else{
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
            return <ul className = "navChild">{isObj(c.child)? c.child.map((m2) => <li><Link to = {m2.alias}>{m2.names}</Link>{cildRecursion(m2)}</li>) : ""}</ul>
        }

    }
    return (
        <div className="menu">
            <div className="container">
                <ul className="nav justify-content-center">
                    {cildMenu(props).map((m, i) => <li className="nav-link text-center" key={m.names + i}><Link to = {m.alias}>{m.names}</Link>
                        {(isObj(m.child) ) ? cildRecursion(m) : ""}
                    </li>)}
                </ul>

            </div>

        </div>)
}