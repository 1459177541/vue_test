import axios from "axios";

export default {
    login(name, pwd, ret){
        axios.post(
            'http://localhost:8080/login',
            {
                name : name,
                password : pwd
            },
        ).then(ret)
    }
}