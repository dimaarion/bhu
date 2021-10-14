import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get, alias, headers, stylesScrollTop } from "../action";
import Footer from "../footer/Footer";
import HeadPage from "../header/HeadPage";
import Menu from "../menu/Menu";
import Article from "./Article";
import HeadScroll from "../header/HeadScroll";
import Pagination from "../footer/Pagination";
export default function ArticlesAll(props) {
  const [artMenu, setArtMenu] = useState([{}]);
  const [countPagination, setCountPagination] = useState(1);
  const [limit, setLimit] = useState(1);
  const SELECTGETMENU = useSelector((state) => state.getMenu);
  useEffect(() => {
    let id = SELECTGETMENU.filter((f) => f.alias === alias(props.location.pathname, f.alias)).map((x) => x.menu_id);
    let idArt = 1
    if (id.length !== 0) {
      idArt = id;
    }
    get(setArtMenu, "artMenu.php", {
      params: {
        id: countPagination,
        menu_id: idArt[0],
      }

    });
    get(setLimit, "limit.php", {
      params: {
        menu_id: idArt[0]
      }
    });

  }, [SELECTGETMENU, props.location.pathname, props.match.params, countPagination])

  useEffect(() => {
    headers({ menu: SELECTGETMENU, location: props.location.pathname })
  }, [SELECTGETMENU, props.location.pathname])

  return (
    <div>
      {props.sY < props.scrollN && props.sX > 800 ? <HeadPage tel={props.tel} /> : <HeadScroll tel={props.tel} scroll={true} />}
      <Menu menu={SELECTGETMENU} url={props.match.url} scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
      <div className="mt-3 container-fluid">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className={props.sX > 1600 ? "col-2 " : "none"}>
            <Menu menu={SELECTGETMENU} position="2" menuMobile="mobileLeft" scrollactiveMob="mobileLeft scrollactiveMobLeft" type="LEFT" nav="container-menu-left" resizeNavComp="flex-sm-column p-0" menuScrolls="scrollactive-menu-left" menuComp="menu-left" url={props.match.url} scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
          </div>
          <div className="col-sm art-box">
            <div className={props.sX > 1600 ? "justify-content-md-end row  " : "justify-content-md-center row "} >
              {artMenu.map((art, i) => <Article key={art.art_names + i} name={art.art_names} alias={art.art_alias} subContent={art.art_subcontent} content={art.art_content} countArt={artMenu.length} />)}
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
      <Pagination limit={limit / artMenu.length} setCountPagination={setCountPagination} countPagination={countPagination} />
      <Footer />
    </div>

  )
}