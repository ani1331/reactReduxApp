import receiveUsers from "./actions"
import axios from "axios";

export const getUsersAsync = () => {
    const usersApiUrl = 'http://localhost:3000/users.json';
    return (dispatch) => {
        return axios.get(usersApiUrl)
            .then(response => response.data)
            .then(users => {
                dispatch((receiveUsers(users)))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export default {
    getUsersAsync
}