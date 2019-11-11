export const RECEIVE_POST_LIST = 'RECEIVE_POST_LIST';

export default function receivePosts(posts) {
    return {
        type: RECEIVE_POST_LIST,
        posts
    }
}