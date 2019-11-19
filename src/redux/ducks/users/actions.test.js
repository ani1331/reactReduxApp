import * as actions from './actions'
import * as types from './types'

describe('actions', () => {
    it('should create an action to receive users list', () => {
        const expectedAction = {
            type: types.RECEIVE_USERS_LIST
        };
        expect(actions.receiveUsers()).toEqual(expectedAction)
    })
});