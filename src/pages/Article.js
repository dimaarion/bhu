import React from "react";
import { Link } from "react-router-dom";
import "../css/article.css";
export default function Article(props) {
    function createMarkup(content = "") {
        return { __html: content };
    }
   
    if (props.countArt > 1) {
        return (
            <div className="article">
                <h2 className="text-center">{props.name}</h2>
                <div className="content" dangerouslySetInnerHTML={createMarkup(props.subContent)} />
                <div className="buttons text-right"><Link className="btn btn-success" to={`/${props.alias}/${props.lang}`}>{props.lang === "ru"?"Подробнее ...":"Mai detaliat ..."}</Link></div>
            </div>
        )
    }else{
        return (
            <div className="article">
                <h1 className="text-center">{props.name}</h1>
                <div className="content" dangerouslySetInnerHTML={createMarkup(props.content)} />
            </div>
        )
    }

}