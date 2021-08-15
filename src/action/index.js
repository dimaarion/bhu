import axios from 'axios'

export const inital_base_url = 'http://sandaniprim.mdlocal';



export function get(f, namef,params = {}) {
    
    axios.get(inital_base_url + "/adminpanel/pages/" + namef,params)
    .then((rezult)=>f(rezult.data))
    .catch((rezult)=>console.log("Нет соиденения с сервером"))
    
    
}