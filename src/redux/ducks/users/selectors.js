import {createSelector} from 'reselect'
import { combineSelectors } from 'combine-selectors-redux'

const getRowsFromState = (state) => state.users.rows;

const getRowsSelector = createSelector(
    getRowsFromState,
    users => users,
);




const getFriendsSelector = createSelector(
    getRowsFromState,
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
    getRowsSelector,
    getFriendsSelector
});