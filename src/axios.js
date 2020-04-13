import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://moviesapi.ir/api/v1',

})

export default instance