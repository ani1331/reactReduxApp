import mockAxios from "../__mocks__/axios";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import jest from 'jest-mock';
import * as types from "./types";
import { getUsersAsync } from './operations'


test('should receive data', async () => {
    const mockData = ['123'];
    mockAxios.get.mockImplementationOnce(() => {
        Promise.resolve({
            data: {
                users: mockData
            }
        })
        }
    );

    const expectedActions = [
        {type: types.RECEIVE_USERS_LIST, users: mockData}
    ];

    expect(getUsersAsync()).toEqual()

    expect(mockAxios.get).toEqual(expectedActions);
    // expect(mockAxios.get).toHaveBeenCalledTimes(1);
    // expect(mockAxios.get).toHaveBeenCalledWith("http://localhost:3000/users.json");
});


