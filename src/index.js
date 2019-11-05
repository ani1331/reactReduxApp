import React from 'react';
import ReactDOM from 'react-dom';
// import AppRouter from './routes/AppRouter';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
// import rootReducer from "./reducers";
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from './reducers';
import {ConnectedRouter} from 'connected-react-router'
import UsersTable from "./components/UsersTable";
import PostList from "./components/UserPostList";
import CommentList from "./components/PostCommentList";
import {Router, Switch, Route} from "react-router-dom";


const history = createBrowserHistory();

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore() {
    return createStore(
        createRootReducer(history),
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );
}

ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            {/*<AppRouter/>*/}
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={UsersTable}/>
                    <Route exact path="/posts/:userId" component={PostList}/>
                    <Route exact path="/comments/:postId" component={CommentList}/>
                </Switch>
            </Router>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
