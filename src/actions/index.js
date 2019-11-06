import axios from 'axios';

export const RECEIVE_USERS_LIST = 'RECEIVE_USERS_LIST';
export const RECEIVE_POST_LIST = 'RECEIVE_POST_LIST';
export const RECEIVE_COMMENT_LIST= 'RECEIVE_COMMENT_LIST';

const usersApiUrl = 'https://jsonplaceholder.typicode.com/users';
const postsApiUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
const commentsApiUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

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

export const getUserPostsAsync = (userId) => {
    return(dispatch) => {
        return axios.get(`${postsApiUrl}${userId}`)
            .then(response => response.data)
            .then(posts => {
                dispatch({
                    type: RECEIVE_POST_LIST,
                    posts
                });
            })
            .catch(error => {
                throw(error);
            });
    }
};

export const getPostCommentsAsync = (postId) => {
    return(dispatch) => {
        return axios.get(`${commentsApiUrl}${postId}`)
            .then(response => response.data)
            .then(comments => {
                dispatch({
                    type: RECEIVE_COMMENT_LIST,
                    comments
                });
            })
            .catch(error => {
                throw(error);
            });
    }
};