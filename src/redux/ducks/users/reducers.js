import {RECEIVE_USERS_LIST} from "./types"

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_USERS_LIST:
            return [...action.users];
        default:
            return state;
    }
};

export default usersReducer;