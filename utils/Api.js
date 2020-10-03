import axios from "axios";

export default axios.create({
    baseURL: 'https://ivyhacks-nice-fox-hu.mybluemix.net/',
    responseType: 'json',
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});