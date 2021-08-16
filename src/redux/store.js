import { combineReducers } from "redux";


export function lang(state = "ru", action) {
    switch (action.type) {
        case "LANG":
            return state = action.lang;
        default:
            return state;
    }
}

export function menuId(state = [1], action) {
    switch (action.type) {
        case "MENUID":
        let alias =  action.menu.filter((x)=>x.alias === action.alias).map((m)=>m.menu_id);
        if(alias.length === 0){
            alias = [1]
        }
        return alias;       
    
        default:
           return state;
    }
}

export function getMenu(state = [{}], action){
     switch (action.type) {
         case "GETMENU":
             return action.preload;
         default:
            return state;
     }
}

export function getMenuArt(state = [{}], action){
    switch (action.type) {
        case "GETMENUART":
            return action.preload;
        default:
           return state;
    }
}


export default combineReducers(
    {
        lang:lang,
        menuId:menuId,
        getMenu:getMenu,
        getMenuArt:getMenuArt
    }
    )