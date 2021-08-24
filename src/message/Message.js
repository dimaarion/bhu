import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { urlMdRu,get,post } from "../action";
import "../css/lang.css";
import Check from "../svg/Check";
import TelScroll from "../svg/TelScroll";
export default function Message(props) {
    const [name, setName] = useState({ str: "", count: 0,valid:false });
    const [tel, setTel] = useState({ str: "", count: 0,valid:false });
    const [maill, setMaill] = useState({ str: "", count: 0,valid:false });
    const [theme, setTheme] = useState({ str: "", count: 0,valid:false });
    const [message, setMessage] = useState({ str: "", count: 0,valid:false });
    const [getMessage, setGetMessage] = useState("");
    const [submit, setSubmit] = useState(0);
    const HOMEJSON = useSelector((state) => state.getHomeJson);
   
   useEffect(()=>{
    get(setGetMessage,"message.php",{
        params:{ 
            username:name.str,
            usertel:tel.str,
            usermail:maill.str.search(/[@]/)?maill.str:"",
            theme:theme.str,
            message:message.str,
            namehidden:name.count,
            telhidden:tel.count,
            mailhidden:maill.str.search(/[@]/)?maill.count:0,
            themehidden:theme.count,
            messagehidden:message.count,
            lang:props.match.params.lang
        }
    });

    console.log(maill.str.search(/[@]/));
   },[submit])
    
    function replases(e, preg,v) {
        let count = 0;
        let el = "";
        el = e.target.value;
        el = el.replace(preg, "");
        e.target.value = el.replace(preg, "");
        let a = [];
        el.split("").map((x, i) => {
            if (i === 1) {
                a[i] = " (" + x;
            } else if (i === 3) {
                a[i] = x + ") ";
            } else if (i === 6) {
                a[i] = x + " ";
            } else if (i === 7) {
                a[i] = x + "";
            } else if (i === 9) {
                a[i] = x + " ";
            } else if (i === 11) {
                a[i] = x + "";
            } else {
                a[i] = x;
            }
        });
        switch (e.target.id) {
            case "usertel":
                return { str: a.join(""), count: el.length,valiad:v };
            default:
                return { str: el, count: el.length};
        }


    }
    function preg(p) {
        switch (p) {
            case "name":
                return /[0-9 <> "" '' ]/g;
            case "tel":
                return /[а-я_А-Я_a-z_A-Z "" '' <> ]/g;
            default:
                return /[<> "" '' ]/g;
        }

    }

    function validator(p = { type: "", count: 0 }) {
        switch (p.type) {
            case "name":
                return p.count > 1 ? true : false;
            case "tel":
                return p.count > 9 ? true : false;
            case "usermail":
                let mail = document.querySelector("#" + p.type);
                if (mail !== null) {
                    mail = mail.value.split("").filter((f) => f === "@");
                }

                return p.count > 9 && mail[0] === "@" ? true : false;
            default:
                return p.count > 1 ? true : false;;
        }
    }

    function MessageDisplay(props) {
        return (

            <div key={props.lang + "message"}>
                {getMessage + " / " + submit}
                <div className="container " id="messagePages">
                    <h2>{props.name}</h2>
                    <p>{props.descript}</p>
                    <p>{props.warning}</p>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm text-left">

                            <div className="form">
                                <div className="col-md mb-3">
                                    <label htmlFor="username">{props.familie}<span className="lab" id="namespan "> {name.str} </span></label>
                                    <input onKeyUp={(e) => setName(replases(e, preg("name"),validator({ type: "name", count: name.count })))} className="username" type="text" className="form-control" id="username" placeholder={props.familie} />
                                    {validator({ type: "name", count: name.count }) ? <div className="messageChecked "><Check size={20} /></div> : ""}

                                </div>
                                <div className="col-md mb-3 ">
                                    <label htmlFor="usertel">{props.tel} <span className="lab" id="telspan">{tel.str}</span></label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">{<TelScroll />}</span>
                                        </div>
                                        <input onKeyUp={(e) => setTel(replases(e, preg("tel"),validator({ type: "tel", count: tel.count })))} maxLength="12"  type="text" className="form-control" id="usertel" placeholder="0 (373) 777 7-77-77" aria-describedby="inputGroupPrepend" />
                                    </div>
                                    {validator({ type: "tel", count: tel.count }) ? <div className="messageChecked "><Check size={20} /></div> : ""}
                                </div>
                                <div className="col-md mb-3">
                                    <label htmlFor="usermail">{props.maill} <span className="lab" id="mailspan">{maill.str}</span></label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        </div>
                                        <input className="usermail" onKeyUp={(e) => setMaill(replases(e, preg("usermail"),validator({ type: "usermail", count: maill.count })))} type="text" className="form-control" id="usermail" placeholder={props.maill} aria-describedby="inputGroupPrepend" />

                                    </div>
                                    {validator({ type: "usermail", count: maill.count }) ? <div className="messageChecked "><Check size={20} /></div> : ""}
                                </div>
                                <div className="col-md mb-3">
                                    <label htmlFor="theme">{props.theme}</label>
                                    <input onKeyUp={(e) => setTheme(replases(e, preg , true))}  type="text" className="form-control" id="theme" placeholder={props.themeHold} />
                                    {validator({ type: "", count: theme.count }) ? <div className="messageChecked "><Check size={20} /></div> : ""}
                                    <div className="invalid-feedback">
                                        Тема.
                                    </div>
                                </div>
                                <div className="col-sm mb-3">
                                    <label htmlFor="message">{props.txt}</label>
                                    <textarea onKeyUp={(e) => setMessage(replases(e, preg , true))}  id="message" className="form-control" rows="3" placeholder={props.txt}></textarea>
                                    {validator({ type: "", count: message.count }) ? <div className="messageChecked "><Check size={20} /></div> : ""}
                                </div>
                            </div>

                            <button onClick = {()=>setSubmit(submit + 1)} id="submitd" value="Отправить сообщение" className="btn btn-primary ml-3" type="submit">{props.button}</button>

                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>
            </div>

        )
    }
    return HOMEJSON.filter((f) => f.lang === props.match.params.lang).map((x) => x.message.map((m) => MessageDisplay({ 
         name: m.name,
         descript: m.descript,
         warning: m.warning,
         familie:m.familie,
         tel:m.tel,
         maill:m.maill,
         theme:m.theme,
         txt:m.txt,
         themeHold:m.themeHold,
         button:m.button })));

}