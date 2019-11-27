import * as types from "./types";

function requestPosts() {
    return {
        type: types.REQUEST_POSTS
    }
}

function responsePostsSuccess() {
    return {
        type: types.RESPONSE_POSTS_SUCCESS
    }
}

function responsePostsFailure() {
    return {
        type: types.RESPONSE_POSTS_FAILURE
    }
}

export const actions = {
    requestPosts,
    responsePostsSuccess,
    responsePostsFailure
};