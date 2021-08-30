import React from "react";
import { Link } from "react-router-dom";
import "../css/article.css";
export default function Article(props) {
    function createMarkup(content = "") {
        return { __html: content };
    }

    function contentSeparator(str = "", n = 20) {
        let s = str;
        return s.split(">").filter((f)=>f !=="").map((x)=>x + ">").filter((f2, i)=>i < n).join("");
    }
   
    if (props.countArt > 1) {
        return (
            <article className="article">
                <h2 className="text-center">{props.name}</h2>
                <div className="content" dangerouslySetInnerHTML={createMarkup(contentSeparator(props.content,100))} />
                <div className="buttons text-right"><Link className="btn btn-success" to={`/${props.alias}/${props.lang}`}>{props.lang === "ru"?"Подробнее ...":"Mai detaliat ..."}</Link></div>
            </article>
        )
    }else{
        return (
            <article className="article">
                <h1 className="text-center">{props.name}</h1>
                <div className="content" dangerouslySetInnerHTML={createMarkup(props.content)} />
            </article>
        )
    }

}