import * as types from './types'

export default function receiveComments(comments) {
    return {
        type: types.RECEIVE_COMMENT_LIST,
        comments
    }
}