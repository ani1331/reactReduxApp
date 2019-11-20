// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import * as actions from './actions';
// import * as types from './types';
// import fetchMock from 'fetch-mock';
//
//
// const middleware = [thunk];
// const mockStore = configureMockStore(middleware);
//
// describe('async actions', () => {
//     afterEach(() => {
//         fetchMock.restore()
//     });
//
//     it('creates RECEIVE_USERS_LIST when fetching users has been done', () => {
//         fetchMock.getOnce('/users', {
//             body: {users: ['do something']},
//             headers: { 'content-type': 'application/json'}
//         });
//
//         const expectedActions = [
//             {type: types.REQUESTING_USERS_LIST},
//             { type: types.RECEIVE_USERS_LIST, body: {users: ['do something']}}
//         ];
//
//         const store = mockStore({users: []});
//
//         return store.dispatch(actions.getUsersAsync()).then(() => {
//             expect(store.getActions()).toEqual(expectedActions)
//         })
//     })
// });


