import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import ArticlesAll from './pages/ArticlesAll';
import { get,scrollActive,resizeActive } from "./action";
import { useDispatch, useSelector } from 'react-redux';
import Pages from './pages/Pages';
import Home from './pages/Home';
import Message from './message/Message';


import "./css/app.css"
import "./css/mobil.css"

function App() {
  const [menu, setMenu] = useState([{}]);
  const [articles, setArticles] = useState([{}]);
  // eslint-disable-next-line no-unused-vars
  const [artMenu, setArtMenu] = useState([{}]);
  const [icons, setIcons] = useState([{}]);
  const [tel, setTel] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [homeJson, setHomeJson] = useState([{}]);
  const [sY, setSY] = useState(0);
  const [sX, setSX] = useState(0);
  const[nameSite, setNameSite] = useState("");
  const[limit, setLimit] = useState("");


  const SELECTGETMENU = useSelector((state) => state.getMenu);
  const lang = useSelector((store) => store.lang);
  const SELECARTICLES = useSelector((store) => store.getArticles);
  const GETMENU = useDispatch();
  const GETMENUART = useDispatch();
  const GETARTICLES = useDispatch();
  const GETICONS = useDispatch();
  const HOMEJSON = useDispatch();
  const NAMEMESSAGE = useDispatch();
  const LOGO = useDispatch();

  useEffect(() => {
    get(setMenu, "menu.php");
    get(setTel, "tel.php");
    get(setArticles, "articles.php");
    get(setIcons, "icons.php");
    get(setHomeJson, "home.php");
    scrollActive(setSY);
    resizeActive(setSX);
    get(setNameMessage,"messagename.php");
    get(setNameSite,"nameSite.php");

  }, [])



  useEffect(() => {
    GETMENU({ type: "GETMENU", preload: menu });
  }, [menu,GETMENU]);

  useEffect(() => {
    GETMENUART({ type: "GETMENUART", preload: artMenu });
  }, [artMenu,GETMENUART]);

  useEffect(() => {
    GETARTICLES({ type: "GETARTICLES", preload: articles });
  }, [articles,GETARTICLES]);

  useEffect(()=>{
    GETICONS({type:"GETICONS", preload:icons});
  },[icons,GETICONS]);

  useEffect(()=>{
    HOMEJSON({type:"HOMEJSON", preload:homeJson});
  },[homeJson,HOMEJSON]);

  useEffect(()=>{
    NAMEMESSAGE({type:"NAMEMESSAGE", preload:nameMessage});
  },[nameMessage,NAMEMESSAGE]);

  useEffect(()=>{
    LOGO({type:"LOGO", preload:nameSite});
  },[nameSite,LOGO]);



  let windowWidth = true;
  let scrolls = true;
  let scrollN = 125;
  let winSize = 1600;
  if(sY < scrollN){
    scrolls = false;
  }else{
    scrolls = true;
  }

  if(sX < winSize){
    windowWidth = true;
  }else{
    windowWidth = false;
  }
  return (
    <div className="container-fluid text-center p-0">

      <Switch>
         <Route exact path={"/"} render = {(params) =><Home {... params} sY = {sY} scrollN = {scrollN}  menu={SELECTGETMENU} lang={lang} scroll = {scrolls} sX = {sX} winSize = {winSize} resize = {windowWidth}  tel={tel}/>} />
         {SELECTGETMENU.map((x)=><Route key = {x.alias + 5} exact path={"/" + x.alias} render = {(params) =><ArticlesAll {... params} sY = {sY} scrollN = {scrollN}  menu={SELECTGETMENU} lang={lang} scroll = {scrolls} sX = {sX} winSize = {winSize} resize = {windowWidth}  tel={tel}/>} />)}
         {SELECARTICLES.map((x)=><Route key = {x.art_alias + 8} exact path={"/" + x.art_alias} render = {(params) =><Pages {... params} sY = {sY} scrollN = {scrollN} menu={SELECTGETMENU} lang={lang} scroll = {scrolls} sX = {sX} winSize = {winSize} resize = {windowWidth}  tel={tel}/>} />)}
         <Route exact  path = "/connect/message" render = {(params) =><Message {... params} sY = {sY} scrollN = {scrollN}  menu={SELECTGETMENU} lang={lang} scroll = {scrolls} sX = {sX} winSize = {winSize} resize = {windowWidth}  tel={tel}/>} />
      </Switch>

    </div>

  );
}



export default App;
