import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cleaner from "../svg/Cleaner";
import Install from "../svg/Install";
import Measure from "../svg/Measure";
import Montaj from "../svg/Montaj";
import Vector from "../svg/Vector";
import {urlMdRu} from "../action";
export default function Icons(props) {
    const [svgI, setSvgI] = useState([{}]);
    const SELECTICONS = useSelector((state) => state.getIcons);
    let svgIcon = [{svg:<Measure />,name:"measure"}, {svg:<Montaj />,name:"montaj"}, {svg:<Install />,name:"install"}, {svg:<Cleaner />,name:"cleaner"}];
    useEffect(() => {
        let svg = SELECTICONS.map((x, i) => x.content = { ru: x.ru,md: x.md, svg: svgIcon[i].svg ,name:svgIcon[i].name});
        setSvgI(svg)
console.log(svg)
    }, [SELECTICONS])

    return (
        <div className="row col-sm mt-3">
            <div className="col-1"></div>
            <div className="col-10 ">
                <div className="row">
                    {svgI.map((x, i) => <div key = {x.name + "d"}  className="col-sm">
                        {x.svg}
                        <Vector/>
                        <div>{ urlMdRu(document.baseURI) === "ru"?x.ru:x.md}</div>
                    </div>)}
                </div>
            </div>
            <div className="col-1"></div>
        </div>

    )
}