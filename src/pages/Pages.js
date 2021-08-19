import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Article from "./Article";
import {alias} from "../action";
export default function Pages(props) {

    const SELECARTICLES = useSelector((store) => store.getArticles);
    const LANG = useSelector((store)=>store.lang);


    return (
        <div className="row mt-3">
            <div className="col-1"></div>
            <div className="col-10 ">
                {SELECARTICLES.filter((f) =>f.art_alias === alias(props.location.pathname,f.art_alias) && f.art_lang === alias(props.location.pathname,f.art_lang)).map((art) => <Article key = {art.art_alias + 2} countArt="1" art = {art} lang = {art.art_lang} name={art.art_names} alias={art.art_alias} subContent={art.art_subcontent} content={art.art_content} />)}
            </div>
            <div className="col-1"></div>
        </div>
    )
}