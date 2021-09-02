import React from "react";
import "../css/imgzoom.css";
import Close from "../svg/Close";
export default function ImgZoom(props) {
    let styles = {
        head:{color:"aquamarine"},
        close:{color:"#fff"}
    }
    return (

        <div className = "img_zoom">
            <div className = "row col-sm text-center">
            <div className = "col-sm"></div>
            <div className = "col-sm-1 mt-2 close" style = {styles.close} onClick = {()=>props.setImgZoom({src:"",alt:""})}><Close size = {50}/></div>
            </div>
            <h2 className = "container" style = {styles.head}>{props.imgZoom.alt}</h2>
          <img   src = {props.imgZoom.src} alt = {props.imgZoom.alt}/>
        </div>



    )
}