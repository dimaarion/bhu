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
    let id = SELECTGETMENU.filter((f) =>f.alias === alias(props.location.pathname, f.alias)).map((x) => x.menu_id);
    let idArt = 1
    if (id.length !== 0) {
      idArt = id;
    }
    get(setArtMenu, "artMenu.php", {
      params: {
        id: 1,
        menu_id: idArt[0],
      }

    });


  }, [SELECTGETMENU, props.location.pathname, props.match.params])

  useEffect(() => {
    headers({ menu: SELECTGETMENU, location: props.location.pathname })
  }, [SELECTGETMENU, props.location.pathname])

  return (
    <div>
    {props.sY < props.scrollN && props.sX > 800 ? <HeadPage tel={props.tel} /> :<HeadScroll tel={props.tel} scroll={true}/>}
    <Menu menu={SELECTGETMENU} url = {props.match.url}  scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
    <div className="mt-3 col-sm">
        <div className = "row col-sm">
                <div className={props.sX > 1600 ?"col-2 mr-3":"none"}>
                    <Menu menu={SELECTGETMENU} position = "2" menuMobile = "mobileLeft" scrollactiveMob = "mobileLeft scrollactiveMobLeft" type = "LEFT" nav = "container-menu-left" resizeNavComp = "flex-sm-column" menuScrolls = "menu-left scrollactive-menu-left" menuComp = "menu-left" url = {props.match.url}  scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
                </div>
                <div className="justify-content-md-center col-sm row mt-2 art-box">
                    {artMenu.map((art, i) => <Article key={art.art_names + i} name={art.art_names} alias={art.art_alias} subContent={art.art_subcontent} content={art.art_content} countArt={artMenu.length} />)}
                </div>
        </div>
    </div>
    <Footer/>
</div>

  )
}