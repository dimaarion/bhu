import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import Article from "./Article";
import { alias, headers } from "../action";
import Menu from "../menu/Menu";
import HeadPage from "../header/HeadPage";
import Footer from "../footer/Footer";
export default function Pages(props) {
    const SELECTGETMENU = useSelector((state) => state.getMenu);
    const SELECARTICLES = useSelector((store) => store.getArticles);
    useEffect(() => {
        headers({ art: SELECARTICLES, location: props.location.pathname })
    }, [SELECARTICLES])
    return (
        <div>

            {props.sY < props.scrollN ? <HeadPage tel={props.tel} /> : ""}
            <Menu menu={SELECTGETMENU} lang={props.lang} scroll={props.scroll} sX={props.sX} winSize={props.winSize} resize={props.resize} tel={props.tel} />
            <div className="row mt-3">
                <div className="col-1"></div>
                <div className="col-10 ">
                    {SELECARTICLES.filter((f) => f.art_alias === alias(props.location.pathname, f.art_alias) && f.art_lang === alias(props.location.pathname, f.art_lang)).map((art) => <Article key={art.art_alias + 2} countArt="1" art={art} lang={art.art_lang} name={art.art_names} alias={art.art_alias} subContent={art.art_subcontent} content={art.art_content} />)}
                </div>
                <div className="col-1"></div>
            </div>
            <Footer />
        </div>

    )
}