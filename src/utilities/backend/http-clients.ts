import axios from 'axios';

let API_URL: any = import.meta.env.VITE_API_URL;
if (API_URL === undefined) {
    switch (import.meta.env.MODE) {
        case 'development':
            API_URL = 'https://api.dev.fastsurvey.de';
            break;
        case 'production':
            API_URL = 'https://api.fastsurvey.de';
            break;
    }
}

const headers = {headers: {'Content-Type': 'application/json'}};

export function httpGet(url: string) {
    return axios.get(API_URL + url, headers);
}

export function httpPost(url: string, data: any) {
    return axios.post(API_URL + url, data, headers);
}
