import React, { useEffect, useState } from "react";
import { imagesZoom } from "../action";
import { Link } from "react-router-dom";
import ImgZoom from '../images/ImgZoom';
import "../css/article.css";
export default function Article(props) {
    const [imgZoom, setImgZoom] = useState({ src: "", alt: "" });

    function createMarkup(content = "") {
        return { __html: content };
    }

    function contentSeparator(str = "", n = 20) {
        let s = str;
        return s.split(">").filter((f) => f !== "").map((x) => x + ">").filter((f2, i) => i < n).join("");
    }

    function styleImagePrim() {
         Array.from(document.getElementsByClassName("sub-art"))
        .map((m)=>m.getElementsByTagName("img"))
        .map((img)=>imgAllSt(img));
        
        function imgAllSt(img) {
            return (
            Array.from(img).filter((f, i) => i === 0).map((x) => imageStyle(x)),
            Array.from(img).filter((f, i) => i !== 0).map((x) => x.remove()),
            Array.from(img).filter((f, i) => i !== 0).map((x) => x.parentElement)
            )
        }
            
        
        function imageStyle(x) {
            return (
                x.setAttribute("class", "image-prim"),
                x.setAttribute("style", "overflow: hidden;"),
                x.parentElement.setAttribute("class", "image-prim-parent")
            );
        }
    }
    useEffect(() => {
        if (props.countArt > 1) {
            styleImagePrim();
        } else {
            console.log("class content-art")
            imagesZoom(setImgZoom);
        }
    }, [props.countArt])


    if (props.countArt > 1) {

        return (

            <article className="article col-sm-3 m-2">
                <Link className="item" to={`/${props.alias}`}>
                    <div className="content sub-art" dangerouslySetInnerHTML={createMarkup(contentSeparator(props.content, 25))} /> 
                    <h2 className="text-center">{props.name}</h2>
                </Link>
            </article>

        )
    } else {
        return (
            <article className="article col-sm">
                {imgZoom.src}
                {imgZoom.src !== "" ? <ImgZoom imgZoom={imgZoom} setImgZoom={setImgZoom} /> : ""}
                <h1 className="text-center">{props.name}</h1>
                <div className="content content-art" dangerouslySetInnerHTML={createMarkup(props.content)} />
            </article>
        )
    }

}