import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export default {
    login(name, password, rb){
        axios.post(
            `${BASE_URL}/login`,
            {
                name, password
            }
        ).then(rb)
    },
    register(id, name, password, rb){
        axios.post(
            `${BASE_URL}/register`,
            {
                id, name, password
            }
        ).then(rb)
    },
    checkName(name, rb){
        return axios.post(
            `${BASE_URL}/checkUserName`,
            {
                name
            }
        ).then(rb)
    }
}