import axios from 'axios'

export const inital_base_url = 'http://velixar.project';

const api = axios.create({
    baseURL: inital_base_url + '/api/getdb/',

})
