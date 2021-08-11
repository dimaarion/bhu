import axios from 'axios'

export const inital_base_url = 'http://sandaniprim.mdlocal';



export function get(f, namef) {
    axios.get(inital_base_url + "/adminpanel/pages/" + namef)
    .then((rezult)=>f(rezult.data))
}