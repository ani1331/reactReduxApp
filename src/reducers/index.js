// import { RECEIVE_COMMENT_LIST} from '../actions';
import { combineReducers } from 'redux';
import usersReducer from "./UsersReducer";
import postsReducer from "./PostsReducer";
import { connectRouter } from 'connected-react-router'


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    posts: postsReducer
});


export default createRootReducer

// export default combineReducers({
//     users: usersReducer,
//     posts: postsReducer
// });

