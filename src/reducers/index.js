import { RECEIVE_COMMENT_LIST} from '../actions';
import { combineReducers } from 'redux';
import usersReducer from "./UsersReducer";
import postsReducer from "./PostsReducer";

export default combineReducers({
    users: usersReducer,
    posts: postsReducer
})

