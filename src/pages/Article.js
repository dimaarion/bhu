import React, { useEffect, useState } from "react";
import { imagesZoom } from "../action";
import { Link } from "react-router-dom";
import ImgZoom from '../images/ImgZoom';
import "../css/article.css";
export default function Article(props) {
    const [imgZoom, setImgZoom] = useState({ src: "", alt: "" });
    const [subArtText, setSubArtText] = useState("");
    function createMarkup(content = "") {
        return { __html: content };
    }

    function contentSeparator(str = "", n = 20) {
        let s = str;
        return s.split(">").filter((f) => f !== "").map((x) => x + ">").filter((f2, i) => i < n).join("");
    }

    function separatorImageTxt(str) {
        let setarator = str;
        let start = setarator.indexOf("img");
        let end = setarator.substr(start).indexOf(">");
        let imageStr = setarator.substr(start, end);
        let imageStrIF = imageStr.indexOf(window.location.protocol);
        imageStr = imageStr.substr(imageStrIF);
        return imageStr.substr(0, imageStr.indexOf('"'));
    }


    function styleImagePrim() {

        let subArt = Array.from(document.getElementsByClassName("sub-art"));
        let subArtContent = Array.from(document.getElementsByClassName("subArtContent"));
        subArt.map((m) => m.getElementsByTagName("img")).map((img) => imgAllSt(img));
        subArt.map((m) => m.getElementsByClassName("boxGalleryImage")).map((c) => classStyle(c));
        subArt.map((m, i) => subArtContent[i].innerHTML = m.textContent);

        function classStyle(c) {
            return (
                Array.from(c).map((x) => x.remove())
            )
        }

        function imgAllSt(img) {
            return (
                Array.from(img).filter((f, i) => i === 0).map((x) => imageStyle(x)),
                Array.from(img).filter((f, i) => i !== 0).map((x) => x.remove())

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
            imagesZoom(setImgZoom);
        }
    }, [props.countArt])


    if (props.countArt > 1) {

        return (

            <article className="col-sm-4 p-2">
                <div className="article p-3">
                    <Link className="item" to={`/${props.alias}`}>
                        {separatorImageTxt(contentSeparator(props.content, 25)) !== "" ? <div className="image-prim-parent">
                            <img className="imgSubArtContent image-prim" src={separatorImageTxt(props.content)} alt="" />
                        </div> : ""}
                        <h2 className="text-left subH2">{props.name}</h2>
                        <div className="subArtContent text-left">{props.content.replace(/<[^>]+>/g, '').replace(/[&nbsp;]/g, ' ').substr(0, 200)}.... </div>
                    </Link>
                </div>
            </article>

        )
    } else {
        return (
            <article className="col-sm">
                <div className="page text-left">
                    <div className = "col-sm">
                    {imgZoom.src !== "" ? <ImgZoom imgZoom={imgZoom} setImgZoom={setImgZoom} /> : ""}
                    <h1 className="text-center">{props.name}</h1>
                    <div className="content content-art" dangerouslySetInnerHTML={createMarkup(props.content)} />
                    </div>
                </div>
            </article>
        )
    }

}