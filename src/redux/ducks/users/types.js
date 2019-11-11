export const RECEIVE_USERS_LIST = 'ducks/users/RECEIVE_USERS_LIST';

export default function receiveUsers(users) {
    return {
        type: RECEIVE_USERS_LIST,
        users
    }
}
