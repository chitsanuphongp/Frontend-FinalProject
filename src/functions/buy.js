import axios from 'axios';


export const Buy = async (info,token) =>
await axios.post("http://localhost:8080/api/lotto/buy", info,{
    headers: { Authorization: 'Bearer ' + token },
})