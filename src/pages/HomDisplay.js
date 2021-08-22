import React from "react";
import Icons from "../icons/Icons";
import Vector from "../svg/Vector";
import {strArr} from "../action";
import Check from "../svg/Check";
export default function HomDisplay(props) {
    function profile(props) {
        return (
            <div key = {props.name + "profile"} className = "col-sm">
                <h4>{props.name}</h4>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row" rowSpan = "2"><img width = "100%" src = {props.image} alt = {props.name}/></th>
                            <td className = "text-left">{props.descript}</td>
                        </tr>
                        <tr><td className = "text-left">{strArr(props.specific,"~").map((x,i)=><div key = {i + "check"}><Check/>{x}</div>)}</td></tr>
                        
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
            <img src={props.content.image} width = "100%" alt = {props.content.winInMd} />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 ">
                    <h2 className="mt-3">{props.content.winInMd}</h2>
                    <div className = "text-justify">{props.content.winInMdContent}</div>
                     <Vector/>
                    <h2 className="mt-3">{props.content.name}</h2>
                    <Icons />
                    <Vector/>
                    <h2 className="mt-3">{props.content.greenEvolution}</h2>
                    <div className = "text-justify">{props.content.greenEvolutionContent}</div>
                   <div className = "row mt-3">{props.content.greenEvolutionContentBox.map((x)=>profile(x))}</div>
                   <Vector/>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    )
}