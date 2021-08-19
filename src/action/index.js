import axios from 'axios'

export const inital_base_url = 'http://adminpanel';



export function get(f, namef, params = {}) {
    axios.get(inital_base_url + "/adminpanel/pages/" + namef, params)
        .then((rezult) => { f(rezult.data); })

}

export function setConnect(f, namef ,params = {}) {
    axios.get(inital_base_url + "/adminpanel/pages/" + namef, params)
    .then((rezult) =>f(rezult.data) )
}



export function arrayCount(n) {
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = i;
    }
    return a;
}

export function urlMdRu(url = "") {
    if(url !== ""){
      let lang =  url.split("/").filter((x)=>x === "ru" || x === "md").map((x2)=>x2);
      let r = "ru";
      if(lang[0] === "md"){
          return "md";
      }else{
          return "ru";
      }
      
    }
   
}

export function alias(b = "",a = "") {
    let c = b.split("/");
    let r = c.filter((f)=>f === a).map((x)=>x);
   return r[0];

    
}