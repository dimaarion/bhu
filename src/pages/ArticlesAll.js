import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get, alias, headers, stylesScrollTop } from "../action";
import Footer from "../footer/Footer";
import HeadPage from "../header/HeadPage";
import Menu from "../menu/Menu";
import Article from "./Article";
import HeadScroll from "../header/HeadScroll";

export default function ArticlesAll(props) {
  const [artMenu, setArtMenu] = useState([{}]);
  const SELECTGETMENU = useSelector((state) => state.getMenu);
  useEffect(() => {
    let id = SELECTGETMENU.filter((f) => f.alias !== "ru" && f.alias !== "md" && f.alias === alias(props.location.pathname, f.alias)).map((x) => x.menu_id);
    let idArt = 1
    if (id.length !== 0) {
      idArt = id;
    }
    get(setArtMenu, "artMenu.php", {
      params: {
        id: 1,
        menu_id: idArt[0],
        lang: props.match.params.lang
      }

    });


  }, [SELECTGETMENU, props.location.pathname, props.match.params])

  useEffect(() => {
    headers({ menu: SELECTGETMENU, location: props.location.pathname })
  }, [SELECTGETMENU, props.location.pathname])

  return (
    <div>

      {props.sY < props.scrollN && props.sX > 800 ? <HeadPage tel={props.tel} /> :<HeadScroll tel={props.tel} scroll={true}/>}
      <Menu menu={SELECTGETMENU} lang={props.lang} url = {props.match.url} scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
      <div style = {stylesScrollTop(props)} className="row mt-3">
        <div className="col-1"></div>
        <div className="col-10 ">
          {artMenu.map((art, i) => <Article key={art.art_names + i} name={art.art_names} lang={art.art_lang} alias={art.art_alias} subContent={art.art_subcontent} content={art.art_content} countArt={artMenu.length} />)}
        </div>
        <div className="col-1"></div>
      </div>
      <Footer />
    </div>

  )
}