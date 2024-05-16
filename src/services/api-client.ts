import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '76c8e212f1f04e95ba8778a8301351cd'
    }
})