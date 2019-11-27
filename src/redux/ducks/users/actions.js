import * as types from './types';

function requestUsers() {
    return {
        type: types.REQUEST_USERS,
    }
}

function responseUsersSuccess() {
    return {
        type: types.RESPONSE_USERS_SUCCESS,
    }
}

function responseUsersFailure() {
    return {
        type: types.RESPONSE_USERS_FAILURE,
    }
}

export const actions = {
    requestUsers,
    responseUsersSuccess,
    responseUsersFailure
};