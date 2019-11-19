import usersReducer from './reducers';
import * as types from './types';
import getUsersAsync from './operations'

describe('users reducer', () => {
    it('should handle REQUESTING_USERS_LIST', () => {
        const requestingUsers = {
            type: types.REQUESTING_USERS_LIST
        };
        expect(usersReducer({}, requestingUsers)).toEqual({
            'fetching': true,
            "rows": []
        });
    });

    // it('should handle RECEIVE_USERS_LIST', () => {
    //     const action = {type: types.RECEIVE_USERS_LIST};
    //     const initialState = {fetching: false,
    //         rows: [...action.users] }
    //     expect(usersReducer(undefined, action)).toEqual(initialState);
    // });
});
