import axios from "axios";
import * as types from './types'

export const getUsersAsync = () => dispatch => {
    const usersApiUrl = 'http://localhost:3000/users.json';
    dispatch({type: types.REQUEST_USERS});
        return axios.get(usersApiUrl)
            .then(response => response.data)
            .then(users =>
                dispatch({ type: types.RESPONSE_USERS_SUCCESS, users})
            )
            .catch(error => {
                dispatch({ type: types.RESPONSE_USERS_FAILURE, error})
            });
};

export default {
    getUsersAsync
}