import {RECEIVE_POST_LIST} from "./types"

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_POST_LIST:
            return [...action.posts];
        default:
            return state;
    }
};

export default postsReducer;