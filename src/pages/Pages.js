import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Article from "./Article";

export default function Pages(props) {
   
    const SELECARTICLES = useSelector((store)=>store.getArticles);

   

    return (
        <div>
           {SELECARTICLES.filter((f)=>"/" + f.art_alias === props.location.pathname).map((art)=><Article countArt = "1" name = {art.art_names} alias = {art.art_alias} subContent = {art.art_subcontent} content = {art.art_content}/>) }
        </div>
    )
}