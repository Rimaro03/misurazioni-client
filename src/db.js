const axios = require('axios');

export default function getData() {
    return axios.get("http://localhost:3002/api/get")
        .then(res =>
            res.data
        )
        .catch(error => console.log(error));
}