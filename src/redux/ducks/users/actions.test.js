import * as actions from './actions'
import * as types from './types'

describe('actions', () => {
    it('should create an action to receive users list', () => {
        expect(actions.receiveUsers()).toEqual({
            type: types.RECEIVE_USERS_LIST
        })
    })
});