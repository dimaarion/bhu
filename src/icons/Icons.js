import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cleaner from "../svg/Cleaner";
import Install from "../svg/Install";
import Measure from "../svg/Measure";
import Montaj from "../svg/Montaj";
import Vector from "../svg/Vector";
import { urlMdRu } from "../action";
import "../css/icons.css";
export default function Icons(props) {
    const [svgI, setSvgI] = useState([{}]);
    const SELECTICONS = useSelector((state) => state.getIcons);
    let svgIcon = [{ svg: <Measure />, name: "measure" }, { svg: <Montaj />, name: "montaj" }, { svg: <Install />, name: "install" }, { svg: <Cleaner />, name: "cleaner" }];
    useEffect(() => {
        let svg = SELECTICONS.map((x, i) => x.content = { ru: x.ru, md: x.md, svg: svgIcon[i].svg, name: svgIcon[i].name });
        setSvgI(svg)
       
    }, [SELECTICONS])

    function iconDescript(f, d, r, m) {
        return f(d) === "ru" ? r : m;
    }

    function stringArrList(f = "") {
        return (
            <ul>
                {f.split(".").map((x,i) => <li key = {i + "list"}>{x}</li>)}
            </ul>
        )

    }

    return (
        <div className="row col-sm mt-3 icons">
           
                    {svgI.map((x, i) => <div key={x.name + "d"} className="col-sm">
                        {x.svg}
                        <Vector />
                        <div>{stringArrList(iconDescript(urlMdRu, document.baseURI, x.ru, x.md))}</div>
                    </div>)}
                
        </div>

    )
}