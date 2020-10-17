import axios from 'axios';

const api = axios.create({
    baseURL: 'exp://pf-kt3.anonymous.mobile.exp.direct:80',
    // LAN: http://192.168.0.13:3333
    // WEB: http://localhost:3333
});

export default api;


