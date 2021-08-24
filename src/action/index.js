import axios from 'axios'

export const inital_base_url = 'http://adminpanel';

const instance = axios.create({
    headers: { 'Content-Type': 'multipart/form-data' }
});

export function get(f, namef, params = {}) {
    axios.get(inital_base_url + "/adminpanel/pages/" + namef, params)
        .then((rezult) => { f(rezult.data); })

}
export function post(namef, params = {}) {
    axios.post(
        inital_base_url + "/adminpanel/pages/" + namef,
        params,
       { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
        
    );

}

export function setConnect(f, namef, params = {}) {
    axios.get(inital_base_url + "/adminpanel/pages/" + namef, params)
        .then((rezult) => f(rezult.data))
}



export function arrayCount(n) {
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = i;
    }
    return a;
}

export function urlMdRu(url = "") {
    if (url !== "") {
        let lang = url.split("/").filter((x) => x === "ru" || x === "md").map((x2) => x2);
        let r = "ru";
        if (lang[0] === "md") {
            return "md";
        } else {
            return "ru";
        }

    }

}

export function alias(b = "", a = "") {
    let c = b.split("/");
    let r = c.filter((f) => f === a).map((x) => x);
    return r[0];
}

export function strArr(str = "", params = ".") {
    return str !== null ? str.split(params) : [""];
}

export function scrollActive(f) {
    window.onscroll = (e) => {
        f(window.scrollY);
    };

}

export function resizeActive(f) {
    f(window.innerWidth)
    window.onresize = (e) => {
        f(window.innerWidth)
    };

}

export function headers(props) {
    let title = [];

    if (props.menu) {
        title = props.menu.filter((f) => f.alias !== "ru" && f.alias !== "md" && f.alias === alias(props.location, f.alias)).map((x) => x.title);
    } else if (props.art) {
        title = props.art.filter((f) => f.art_alias === alias(props.location, f.art_alias)).map((x) => x.art_title);
    } else if (props.hom) {
        let location = props.location.replace(/[/]/g, "");
        if (location === "") {
            location = "/";
        } else {
            location = props.location.replace(/[/]/g, "");
        }
        title = props.hom.filter((f) => f.alias === location).map((x) => x.title);
    } else {
        title = ["/"];
    }
    if (title[0] !== undefined) {
        document.title = title[0];
    }

}
