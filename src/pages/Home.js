/* eslint-disable no-self-assign */
import React, { useEffect, useState } from "react";
import { get, urlMdRu, headers,stylesScrollTop } from "../action";
import {useSelector } from "react-redux";
import Article from "./Article";
import HomDisplay from "./HomDisplay";
import Menu from "../menu/Menu";
import HeadPage from "../header/HeadPage";
import Footer from "../footer/Footer";
import HeadScroll from "../header/HeadScroll";
export default function Home(props) {
    const [artMenu, setArtMenu] = useState([{}]);
    const SELECTGETMENU = useSelector((state) => state.getMenu);
    const JSONHOME = useSelector((state) => state.getHomeJson);
    const [home, setHome] = useState({});


    useEffect(() => {
        let id = 1;
        let len = "ru";
        if (props.location.pathname === "/") {
            id = 1;
            len = "ru";
        } else if (props.location.pathname === "/md") {
            id = 2;
            len = "md";
        }


        if (id.length !== 0) {
            id = id;
        }
        get(setArtMenu, "artMenu.php", {
            params: {
                id: 1,
                menu_id: id,
                lang: len
            }

        });

    }, [props.location.pathname])
    useEffect(() => {
        let js = JSONHOME.filter((f) => f.lang === urlMdRu(props.location.pathname)).map((x) => x);
        setHome(js);
    }, [JSONHOME, props.location.pathname])
    useEffect(() => {
        headers({ hom: SELECTGETMENU, location: props.location.pathname })
    }, [SELECTGETMENU, props.location.pathname])


    return (
        <div>
            {props.sY < props.scrollN && props.sX > 800 ? <HeadPage tel={props.tel} /> :<HeadScroll tel={props.tel} scroll={true}/>}
            <Menu menu={SELECTGETMENU} url = {props.match.url}  scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
            <div className="mt-3 col-sm">
                <div className = "row">
                        <div className={props.sY < props.scrollN && props.sX > 1600 ?"col-2":"none"}>
                            <Menu menu={SELECTGETMENU} menuMobile = "mobileLeft" scrollactiveMob = "mobileLeft scrollactiveMobLeft" type = "LEFT" nav = "container-menu-left" resizeNavComp = "flex-sm-column" menuComp = "menu-left" url = {props.match.url}  scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
                        </div>
                        <div className="col-sm">
                            {artMenu.map((art, i) => <Article key={art.art_names + i} name={art.art_names} alias={art.art_alias} subContent={art.art_subcontent} content={art.art_content} countArt={artMenu.length} />)}
                        </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}