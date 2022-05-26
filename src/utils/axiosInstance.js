import axios from 'axios'
// import dayjs from 'dayjs'
// import jwt_decode from "jwt-decode"

const baseURL="http://localhost:5000/";
let tokens = localStorage.getItem("tokens")?JSON.parse(localStorage.getItem("tokens")):'no tokens';
const axiosInstance= axios.create(
    {
        baseURL, 
        headers:{
        Authorization:`Bearer ${tokens.accessToken} ${tokens.refreshToken}`
        },
    });
export default axiosInstance