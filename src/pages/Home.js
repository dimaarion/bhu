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
import Pagination from "../footer/Pagination";
export default function Home(props) {
    const [artMenu, setArtMenu] = useState([{}]);
    const SELECTGETMENU = useSelector((state) => state.getMenu);
    const JSONHOME = useSelector((state) => state.getHomeJson);
    const [countPagination, setCountPagination] = useState(1);
    

    useEffect(() => {
        let id = 1;
        if (props.location.pathname === "/") {
            id = 1;
        }


        if (id.length !== 0) {
            id = id;
        }
        get(setArtMenu, "artMenu.php", {
            params: {
                id: countPagination,
                menu_id: id
            }

        });

    }, [props.location.pathname,countPagination])
    
    useEffect(() => {
        headers({ hom: SELECTGETMENU, location: props.location.pathname })
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
                        <div className="justify-content-md-center col-sm row art-box mt-2" >
                            {artMenu.map((art, i) => <Article key={art.art_names + i} name={art.art_names} alias={art.art_alias} subContent={art.art_subcontent} content={art.art_content} countArt={artMenu.length} />)}
                        </div>
                </div>
            </div>
            <Pagination countArt={artMenu.length} setCountPagination = {setCountPagination} countPagination = {countPagination}/>
            <Footer/>
        </div>

    )
}