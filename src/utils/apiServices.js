import axios from "axios";

export const apiServices = {
    post(resources, payload) {
        axios.post(resources, payload).then((response) => {
            return response;
        }).catch((error) => {
            return error;
        })

    },
    get(resources, payload) {
        return axios.get(resources, payload);
    },
}