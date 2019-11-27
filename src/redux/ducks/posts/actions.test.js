import {actions} from './actions'
import * as types from './types'

describe('posts', () => {
    it('should create an action to request posts list', () => {
        expect(actions.requestPosts()).toEqual({
            type: types.REQUEST_POSTS
        })
    });

    it('should create an action to receive posts list', () => {
        expect(actions.responsePostsSuccess()).toEqual({
            type: types.RESPONSE_POSTS_SUCCESS
        })
    });

    it('should create an action to handle an error', () => {
        expect(actions.responsePostsFailure()).toEqual({
            type: types.RESPONSE_POSTS_FAILURE
        })
    });
});