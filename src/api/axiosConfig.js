import axios from 'axios';

export default axios.create({
    baseURL:'http://3.16.135.38:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
