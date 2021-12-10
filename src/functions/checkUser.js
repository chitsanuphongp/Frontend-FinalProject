import axios from "axios";

export const currentUser = async (token) =>
    await axios.post("http://127.0.0.1:8080/api/auth/currentuser",
        {},
        {
            headers: { "Authorization": 'Bearer ' + token },
        }
    );