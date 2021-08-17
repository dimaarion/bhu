import React, { useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import ArticlesAll from './pages/ArticlesAll';
import HeadPage from "./header/HeadPage";
import { get } from "./action";
import Menu from './menu/Menu';
import { useDispatch, useSelector } from 'react-redux';
import Pages from './pages/Pages';

function App() {
  const [menu, setMenu] = useState([{}]);
  const [articles, setArticles] = useState([{}]);
  const [artMenu, setArtMenu] = useState([{}]);
 const SELECTGETMENU = useSelector((state)=>state.getMenu);
 const lang = useSelector((store)=>store.lang);
 const SELECTMENUID = useSelector((store)=>store.menuId);
 const SELECARTICLES = useSelector((store)=>store.getArticles);
 const GETMENU = useDispatch();
 const GETMENUART = useDispatch();
 const GETARTICLES = useDispatch();
  useEffect(() => {
    get(setMenu, "menu.php");
    get(setArticles, "articles.php");
   
  }, [])

  useEffect(()=>{
     get(setArtMenu, "artMenu.php",{params:{
      id:1,
      menu_id:SELECTMENUID[0],
      lang:lang
  }});
  },[lang,SELECTMENUID])
  
  useEffect(()=>{
    GETMENU({type:"GETMENU",preload:menu});
  },[menu])

  useEffect(()=>{
    GETMENUART({type:"GETMENUART",preload:artMenu})
  },[artMenu])

  useEffect(()=>{
    GETARTICLES({type:"GETARTICLES",preload:articles})
  },[articles])
  return (
    <div className="container-fluid text-center p-0">
      <HeadPage />
      <Menu menu={SELECTGETMENU} />
      <Switch>
        {SELECTGETMENU.map((m , i) => <Route exact   key =  {m.alias + i} path={m.alias==="/"?"/":"/" + m.alias} component={ArticlesAll} />)}
        {SELECARTICLES.map((m , i) => <Route  exact  key =  {m.art_alias + i} path={"/" + m.art_alias} component={Pages} />)}
      </Switch>
    </div>

  );
}



export default App;
