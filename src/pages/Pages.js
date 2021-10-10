import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import Article from "./Article";
import { alias, headers, stylesScrollTop } from "../action";
import Menu from "../menu/Menu";
import HeadPage from "../header/HeadPage";
import Footer from "../footer/Footer";
import HeadScroll from "../header/HeadScroll";

export default function Pages(props) {
    const SELECTGETMENU = useSelector((state) => state.getMenu);
    const SELECARTICLES = useSelector((store) => store.getArticles);
    useEffect(() => {
        headers({ art: SELECARTICLES, location: props.location.pathname })
    }, [SELECARTICLES, props.location.pathname])
    return (
        <div>

            {props.sY < props.scrollN && props.sX > 800 ? <HeadPage tel={props.tel} /> : <HeadScroll tel={props.tel} scroll={true} />}
            <Menu menu={SELECTGETMENU} url={props.match.url} scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
            <div style={stylesScrollTop(props)} className="row mt-3 col-sm">
                <div className={props.sX > 1600 ? "col-2" : "none"}>
                    <Menu menu={SELECTGETMENU} position="2" menuMobile="mobileLeft" scrollactiveMob="mobileLeft scrollactiveMobLeft" type="LEFT" nav="container-menu-left" resizeNavComp="flex-sm-column" menuScrolls="menu-left scrollactive-menu-left" menuComp="menu-left" url={props.match.url} scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
                </div>
                <div className="col-sm ">
                    {SELECARTICLES.filter((f) => f.art_alias === alias(props.location.pathname, f.art_alias)).map((art) => <Article key={art.art_alias + 2} countArt="1" art={art} name={art.art_names} alias={art.art_alias} subContent={art.art_subcontent} content={art.art_content} />)}
                </div>

            </div>
            <Footer />
        </div>

    )
}