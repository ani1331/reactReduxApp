import {RECEIVE_USERS_LIST} from "../actions";

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_USERS_LIST:
            return [...action.users];
        default:
            return state;
    }
};

export default usersReducer;