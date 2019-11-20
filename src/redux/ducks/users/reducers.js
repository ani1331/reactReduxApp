import * as types from "./types"

const initialState = {
    fetching: true,
    rows: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUESTING_USERS_LIST:
            return {
                fetching: true,
                rows: []
            };
        case types.RECEIVE_USERS_LIST:
            return {
                fetching: false,
                rows: action.users
            };
        default:
            return state;
    }
};

export default usersReducer;