import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get } from "../action";

export default function ArticlesAll(props) {
    const count = useSelector((store)=>store.test)
    const [menu, setMenu] = useState([{}]);
    const [artMenu, setArtMenu] = useState([{}]);
    useEffect(() => {
        get(setMenu, "menu.php");
        get(setArtMenu, "artMenu.php",{params:{
        id:1,
        menu_id:2
    }});
    console.log(count)
    }, [])
    
   function menuId(m) {
       m.filter((f)=>f.alias === props.location.pathname)
   }
    return (
        <div>
          <div onClick = {()=>menuId(menu)}>articlesAll</div> 
        </div>
    )
}