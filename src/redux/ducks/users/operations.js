import axios from "axios";
import * as types from './types'

export const getUsersAsync = () => dispatch => {
    const usersApiUrl = 'http://localhost:3000/users.json';
    dispatch({type: types.REQUESTING_USERS_LIST});
        return axios.get(usersApiUrl)
            .then(response => response.data)
            .then(users =>
                dispatch({ type: types.RECEIVE_USERS_LIST, users})
            )
            .catch(error => {
                dispatch({ type: types.REQUEST_FAILED, error})
            });
};

export default {
    getUsersAsync
}