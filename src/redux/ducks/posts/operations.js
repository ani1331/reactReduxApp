import receivePosts from "./actions"
import axios from "axios";

const getUserPostsAsync = (userId) => {
    const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
    return (dispatch) => {
        return axios.get(`${postsApiUrl}${userId}`)
            .then(response => response.data)
            .then(posts => {
                dispatch(receivePosts(posts));
            })
            .catch(error => {
                throw(error);
            });
    }
};

export default {
    getUserPostsAsync
}