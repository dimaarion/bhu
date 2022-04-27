import React,{useState} from "react";
import Icons from "../icons/Icons";
import Vector from "../svg/Vector";
import Check from "../svg/Check";
import "../css/homdisplay.css";
export default function HomDisplay(props) {
   
    function profile(props) {
        return (
            <div key={props.name + "profile"} className="col-sm-6 mt-4">
                <Vector/>
                <h4>{props.name}</h4>
                <div className="row text-left">
                    <div className="col-sm">
                        <img width="100%" src={props.image} alt={props.name} />
                    </div>
                    <div className="col-sm">
                        {props.descript} 
                        <div className="col-sm mt-3">
                            <h4>{props.headSpecific}</h4>
                            {props.specific.map((x, i) => <div key={i + "check"}><div className="hom_check"><Check size={20} /></div>{x.content}</div>)}
                            </div>
                    </div>
                </div>
                
               


            </div>
        )
    }
    function listing(props) {
        return (
            <div className="">
               
                <h2 className="mt-3">{props.Evolution}</h2>
                <div className="text-justify">{props.EvolutionContent}</div> 
                <div className="row mt-3">
                   {props.EvolutionContentBox.map((x,i) => profile(x,i))}
                </div>
              
            </div>
        );
    }
    return (
        <article className="homdisplay">
            <img src={props.content.image} width="100%" alt={props.content.winInMd} />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10 ">
                    <h2 className="mt-3">{props.content.winInMd}</h2>
                    <div className="text-justify container">{props.content.winInMdContent}</div>
                    <Vector />
                    <h2 className="mt-3">{props.content.name}</h2>
                    <Icons />
                    <Vector />
                    {props.content.listing.map((x, i) => <div key={x + i}>{listing(x)}</div>)}
                    <Vector />
                   
                </div>
            </div>
            <div className="col-1"></div>
        </article>
    )
}