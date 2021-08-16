import React, { useEffect, useState } from "react";
import { Route, Router, Switch } from "react-router";
import { get } from "../action";
import Lang from "../headbar/Lang";
import Logo from "../headbar/Logo";
import MessageButton from "../headbar/MessageButton";
import Tel from "../headbar/Tel";
import Menu from "../menu/Menu";
import ArticlesAll from "./ArticlesAll";

export default function Pages(props) {
    const [menu, setMenu] = useState([{}]);
    const [articles, setArticles] = useState([{}]);
   
    useEffect(() => {
        get(setMenu, "menu.php");
        get(setArticles, "articles.php");
       
       
    }, [])

     

   

    return (
        <div>
            <div className="row">
                <div className="col-sm"></div>
                <Logo />
                <MessageButton />
                <Tel />
                <Lang />
                <div className="col-sm"></div>
            </div>
            <Menu menu={menu} />
           
           
                {/*menu.map((m) =><Route path={`/:page/:lang`} component = {ArticlesAll}/>)*/}

          


        </div>
    )
}