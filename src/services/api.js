import axios from 'axios'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params: {
        api_key: 'b79405401ca97b6fc88bbc5b3750bceb',
        language: 'pt-BR',
        page: 1
    }
})

export default api