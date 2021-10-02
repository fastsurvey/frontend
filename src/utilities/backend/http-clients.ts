import axios from 'axios';

const VITE_ENV = import.meta.env.VITE_ENV;
const VITE_API_URL = import.meta.env.VITE_API_URL;

let baseUrl =
    VITE_ENV === 'development' ? 'dev.fastsurvey.de' : 'fastsurvey.de';

let apiUrl =
    VITE_API_URL !== undefined ? VITE_API_URL : `https://api.${baseUrl}`;

const headers = {headers: {'Content-Type': 'application/json'}};

export function httpGet(url: string) {
    return axios.get(apiUrl + url, headers);
}

export function httpPost(url: string, data: any) {
    return axios.post(apiUrl + url, data, headers);
}
