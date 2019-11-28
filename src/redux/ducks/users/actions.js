import * as types from './types';

export function requestUsers() {
    return {
        type: types.REQUEST_USERS,
    }
}

export function responseUsersSuccess(users) {
    return {
        type: types.RESPONSE_USERS_SUCCESS,
        users
    }
}

export function responseUsersFailure(error) {
    return {
        type: types.RESPONSE_USERS_FAILURE,
        error
    }
}