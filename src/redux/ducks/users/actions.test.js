import {actions} from './actions'
import * as types from './types'

describe('actions', () => {
    it('should create an action to request users list', () => {
        expect(actions.requestUsers()).toEqual({
            type: types.REQUEST_USERS
        })
    });

    it('should create an action to receive users list', () => {
        expect(actions.responseUsersSuccess()).toEqual({
            type: types.RESPONSE_USERS_SUCCESS
        })
    });

    it('should create an action to handle an error', () => {
        expect(actions.responseUsersFailure()).toEqual({
            type: types.RESPONSE_USERS_FAILURE
        })
    });
});