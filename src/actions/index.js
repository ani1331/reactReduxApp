import axios from 'axios';

export const RECEIVE_USERS_LIST = 'RECEIVE_USERS_LIST';
export const RECEIVE_POST_LIST = 'RECEIVE_POST_LIST';
export const RECEIVE_COMMENT_LIST= 'RECEIVE_COMMENT_LIST';

const usersApiUrl = 'https://jsonplaceholder.typicode.com/users';
const postsApiUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
// const commentsApiUrl = '';

export const getUsersAsync = () => {
    return (dispatch) => {
        return axios.get(usersApiUrl)
            .then(response => response.data)
            .then(users => {
                dispatch({
                    type: RECEIVE_USERS_LIST,
                    users
                })
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const getUserPostsAsync = (id) => {
    return(dispatch) => {
        return axios.get(`${postsApiUrl}${id}`)
            .then(response => response.data)
            .then(posts => {
                dispatch({
                    type: RECEIVE_POST_LIST,
                    // payload: id,
                    posts
                });
            })
            .catch(error => {
                throw(error);
            });
    }
};