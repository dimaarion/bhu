import { combineReducers } from "redux";


export function lang(state = "ru", action) {
    switch (action.type) {
        case "LANG":
            return state = action.lang;
        default:
            return state;
    }
}

export function menuId(state = 0, action) {
    switch (action.type) {
        case "MENUID":
        return action.payload;       
    
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

export function getArticles(state = [{}], action){
    switch (action.type) {
        case "GETARTICLES":
            return action.preload;
        default:
           return state;
    }
}
export function getIcons(state = [{}], action){
    switch (action.type) {
        case "GETICONS":
            return action.preload;
        default:
           return state;
    }
}
export function getHomeJson(state = [{}], action){
    switch (action.type) {
        case "HOMEJSON":
            return action.preload;
        default:
           return state;
    }
}
export function getNameMessage(state = "", action){
    switch (action.type) {
        case "NAMEMESSAGE":
            return action.preload;
        default:
           return state;
    }
}
export function getLogo(state = "", action){
    switch (action.type) {
        case "LOGO":
            return action.preload;
        default:
           return state;
    }
}
export function getLimit(state = 3, action){
    switch (action.type) {
        case "LIMIT":
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
        getMenuArt:getMenuArt,
        getArticles:getArticles,
        getIcons:getIcons,
        getHomeJson:getHomeJson,
        getNameMessage:getNameMessage,
        getLogo:getLogo,
        getLimit:getLimit
    }
    )