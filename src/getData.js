const axios = require('axios');

export default function getDBdata() {
    return axios.get("http://localhost:3002/misurazioni/real")
        .then(res =>
            res.data
        )
        .catch(error => console.log(error));
}