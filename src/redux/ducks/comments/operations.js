import receiveComments from "./actions"
import axios from "axios";

export const getPostCommentsAsync = (postId) => {
    const commentsApiUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';
    return (dispatch) => {
        return axios.get(`${commentsApiUrl}${postId}`)
            .then(response => response.data)
            .then(comments => {
                dispatch(receiveComments(comments));
            })
            .catch(error => {
                throw(error);
            });
    }
};

export default {
    getPostCommentsAsync
}