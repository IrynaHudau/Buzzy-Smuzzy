import axios from 'axios';

const instance = axios.create({
    baseURL:'https://buzzy-smuzzy.firebaseio.com/'
});

export default instance;