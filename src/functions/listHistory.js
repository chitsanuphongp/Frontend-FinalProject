import axios from 'axios';

const token = localStorage.getItem('token');
export const listHistory = async (userId) =>
    await axios.get("http://localhost:8080/api/lotto/history",
        {
            headers: { "Authorization": 'Bearer ' + token },
        },{
        body: JSON.stringify(
            userId
        )}
    );
    