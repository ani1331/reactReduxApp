export const RECEIVE_COMMENT_LIST = 'RECEIVE_COMMENT_LIST';

export default function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENT_LIST,
        comments
    }
}