import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { urlMdRu } from "../action";
import "../css/lang.css";
import Check from "../svg/Check";
import TelScroll from "../svg/TelScroll";
export default function Message(props) {
    const [name, setName] = useState({ str: "", count: 0 });
    const [tel, setTel] = useState({ str: "", count: 0 });
    function nameM(e) {
        let el = "";
        el = e.target.value;
        el = el.replace(/[0-9 <> "" '' ]/g, "");
        return { str: el, count: el.length };
    }

    function telM(e) {
        let el = "";
        el = e.target.value;
        el = el.replace(/[а-я_А-Я_a-z_A-Z "" '' <> ]/g,""); 
        
        let a = [];
        el.split("").map((x, i)=>{
            if(i === 1){
              a[i]  =  " (" + x;
            }else if(i === 3){
                a[i]  =   x + ") ";
            }else if(i === 6){
                a[i]  =   x + " ";
            }else if(i === 7){
                a[i]  =   x + "";
            }else if(i === 9){
                a[i]  =   x + " ";
            }else if(i === 11){
                a[i]  =   x + "";
            }else{
              a[i] = x;
            }
        });

        e.target.value = el.replace(/[а-я_А-Я_a-z_A-Z "" '' <> ]/g,""); ;
        // e.target.value = a.join("");
        
       
        return { str:a.join(""), count: el.length };
    }
    function telMs(e) {
        
    }
    return (

        <div>
            {tel.str + "/" + tel.count}
            <div className="container " id="messagePages">
                <h2>Напишите нам сообщение</h2>
                <p>Если у Вас есть вопросы или Вы желаете оставить заявку на замер окон, заполните форму, приведенную ниже.</p>

                <p>* Все поля ОБЯЗАТЕЛЬНЫ для заполнения!</p>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm text-left">

                        <div className="form">
                            <div className="col-md mb-3">

                                <label htmlFor="username">Ф. И. О.<span className = "lab" id="namespan "> {name.str} </span></label>
                                <input onKeyUp={(e) => setName(nameM(e))} className="username" type="text" className="form-control" id="username" placeholder="Ф. И. О." />
                                <Check size = {20}/>

                            </div>
                            <div className="col-md mb-3 ">
                                <label htmlFor="usertel">Номер телефона <span id="telspan"></span></label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend">{<TelScroll />}</span>
                                    </div>
                                   <input onKeyUp = {(e)=>setTel(telM(e))}  maxLength = "12"  name="usertel" type="text" className="form-control" id="usertelFocus" placeholder="0 (373) 777 7-77-77" aria-describedby="inputGroupPrepend" />

                                </div>
                            </div>
                            <div className="col-md mb-3">
                                <label htmlFor="usermail">Электронная почта <span id="mailspan"></span></label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    </div>
                                    <input className="usermail" type="text" className="form-control" id="usermail" placeholder="Электронная почта" aria-describedby="inputGroupPrepend" />

                                </div>
                            </div>
                            <div className="col-md mb-3">
                                <label htmlFor="theme">Тема</label>
                                <input name="theme" type="text" className="form-control" id="theme" placeholder="Тема сообщения" />
                                <div className="invalid-feedback">
                                    Тема.
                                </div>
                            </div>
                            <div className="col-sm mb-3">
                                <label htmlFor="message">Сообщение</label>
                                <textarea name="message" id="message" className="form-control" rows="3" placeholder="Сообщение"></textarea>

                            </div>
                        </div>

                        <button name="message_send" id="submitd" value="Отправить сообщение" className="btn btn-primary ml-3" type="submit">Отправить сообщение</button>

                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>



        </div>

    )
}