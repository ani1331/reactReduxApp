import * as types from "./types";

export default function receivePosts(posts) {
    return {
        type: types.RECEIVE_POST_LIST,
        posts
    }
}