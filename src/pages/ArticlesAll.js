import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, set } from "../action";
import Article from "./Article";

export default function ArticlesAll(props) {
   
    const SELECTGETMENU = useSelector((state)=>state.getMenu);
    const SELECTGETMENUART = useSelector((state)=>state.getMenuArt);
    const MENUID = useDispatch();
   

    
  
 
useEffect(() => {
    let alias = props.location.pathname.replace("/","");
    console.log(props.location.pathname)
     MENUID({type:"MENUID",menu:SELECTGETMENU,alias:alias})
  }, [props.location.pathname])


   
    return (
        <div className = "row mt-3">
          <div className = "col-1"></div>
          <div className = "col-10 ">
             {SELECTGETMENUART.map((art, i)=><Article key = {art.art_names + i} name = {art.art_names} alias = {art.art_alias} subContent = {art.art_subcontent} content = {art.art_content} countArt = {SELECTGETMENUART.length} />)}     
          </div>
          <div className = "col-1"></div>
        </div>
    )
}