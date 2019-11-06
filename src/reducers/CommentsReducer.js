import {RECEIVE_COMMENT_LIST} from "../actions";

const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_COMMENT_LIST:
            return [...action.comments];
        default:
            return state;
    }
};

export default commentsReducer;