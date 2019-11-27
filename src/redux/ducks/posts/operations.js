import * as types from "./types"
import axios from "axios";

export const getUserPostsAsync = (userId) => (dispatch) => {
    if (userId) {
        const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
        dispatch({type: types.REQUEST_POSTS});
        return axios.get(`${postsApiUrl}${userId}`)
            .then(response => response.data)
            .then(posts => {
                dispatch({type: types.RESPONSE_POSTS_SUCCESS, posts});
            })
            .catch(error => {
                dispatch({type: types.RESPONSE_POSTS_FAILURE, error})
            });
    } else {
        console.log('userId is not received')
    }
};

export default {
    getUserPostsAsync
}