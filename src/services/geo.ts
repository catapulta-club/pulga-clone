import axios from 'axios';

const geo = axios.create({
    baseURL: 'https://api.bigdatacloud.net/data/reverse-geocode-client',
});

export { geo };