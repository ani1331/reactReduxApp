import * as types from "./types"

const initialState = {
    fetching: true,
    rows: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_USERS:
            return {
                fetching: true,
                rows: []
            };
        case types.RESPONSE_USERS_SUCCESS:
            return {
                fetching: false,
                rows: action.users
            };
        default:
            return state;
    }
};

export default usersReducer;