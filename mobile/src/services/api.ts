import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.13:3333',
    // LAN: http://192.168.0.13:3333
    // WEB: http://localhost:3333
});

export default api;


