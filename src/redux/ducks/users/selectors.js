import {createSelector} from 'reselect'
import { combineSelectors } from 'combine-selectors-redux'

const getUsersFromState = (state) => state.users;

const getUsersSelector = createSelector(
    getUsersFromState,
    users => users
);

const getFriendsSelector = createSelector(
    getUsersFromState,
    users => {
        const hashMap = {};
        users.map(
            user => {
                hashMap[user.id] = user.friends.map(friend => friend.name);
            }
        );
        return hashMap;
    }
);

export const selectors = combineSelectors({
    getUsersSelector,
    getFriendsSelector
});