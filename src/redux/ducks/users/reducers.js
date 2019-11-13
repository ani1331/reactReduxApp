import * as types from "./types"

const initialState = {
    status: 'initial',
    rows: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUESTING_USERS_LIST:
            return {
                status: "requesting",
                rows: []
            };
        case types.REQUEST_FAILED:
            return {
                status: 'failed',
                rows: []
            };
        case types.RECEIVE_USERS_LIST:
            return {
                status: 'success',
                rows: [...action.users]
            };
        default:
            return state;
    }
};

export default usersReducer;