import React, { useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import ArticlesAll from './pages/ArticlesAll';
import HeadPage from "./header/HeadPage";
import { get, urlMdRu, setConnect, alias } from "./action";
import Menu from './menu/Menu';
import { useDispatch, useSelector } from 'react-redux';
import Pages from './pages/Pages';
import Home from './pages/Home';
import Icons from './icons/Icons';

function App() {
  const [menu, setMenu] = useState([{}]);
  const [articles, setArticles] = useState([{}]);
  const [artMenu, setArtMenu] = useState([{}]);
  const [icons, setIcons] = useState([{}]);
  const [tel, setTel] = useState("");
  const [homeJson, setHomeJson] = useState([{}]);
  const SELECTGETMENU = useSelector((state) => state.getMenu);
  const lang = useSelector((store) => store.lang);
  const LANGDisp = useDispatch();
  const SELECTMENUID = useSelector((store) => store.menuId);
  const SELECARTICLES = useSelector((store) => store.getArticles);
  const GETMENU = useDispatch();
  const GETMENUART = useDispatch();
  const GETARTICLES = useDispatch();
  const MENUID = useDispatch();
  const GETICONS = useDispatch();
  const HOMEJSON = useDispatch();
  useEffect(() => {
    get(setMenu, "menu.php");
    get(setTel, "tel.php");
    get(setArticles, "articles.php");
    get(setIcons, "icons.php");
    get(setHomeJson, "home.php");
  }, [])



  

  useEffect(() => {
    GETMENU({ type: "GETMENU", preload: menu });
  }, [menu])

  useEffect(() => {
    GETMENUART({ type: "GETMENUART", preload: artMenu });
  }, [artMenu])

  useEffect(() => {
    GETARTICLES({ type: "GETARTICLES", preload: articles });
  }, [articles])

  useEffect(()=>{
    GETICONS({type:"GETICONS", preload:icons});
  },[icons])

  useEffect(()=>{
    HOMEJSON({type:"HOMEJSON", preload:homeJson});
  },[homeJson])
  return (
    <div className="container-fluid text-center p-0">
      <HeadPage tel={tel} />
      <Menu menu={SELECTGETMENU} lang={lang} />
      <Switch>
         <Route exact path={"/"} component={Home} />
         <Route exact path={"/md"} component={Home} />
         {SELECTGETMENU.map((x)=><Route key = {x.alias + 5} exact path={"/" + x.alias + "/:lang"} component={ArticlesAll} />)}
         {SELECARTICLES.map((x)=><Route key = {x.art_alias + 8} exact path={"/" + x.art_alias + "/" + x.art_lang} component={Pages} />)}
      </Switch>
    </div>

  );
}



export default App;
