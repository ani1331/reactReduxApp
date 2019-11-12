import * as types from './types';

export default function receiveUsers(users) {
    return {
        type: types.RECEIVE_USERS_LIST,
        users
    }
}