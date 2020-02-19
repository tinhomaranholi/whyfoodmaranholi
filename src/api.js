import axios from 'axios';

const url = axios.create({baseURL: 'https://api-teste-frontend.luan-nuvem.now.sh'})

export default{
    loadRestaurants: () => url.get('/api/products')
}