import * as types from "./types";
import { getUsersAsync } from './operations'

import axios from "axios";
jest.mock("axios");

describe('users async function', () => {
    let dispatchFn;

    beforeEach(() => {
        dispatchFn = jest.fn();
    });

    it('should return callback function', () => {
        expect(typeof getUsersAsync()).toBe('function');
    });

    it('should handle REQUESTING_USERS_LIST', () => {
        axios.get.mockResolvedValue({
            data: []
        });
        getUsersAsync()(dispatchFn);
        expect(dispatchFn).toHaveBeenCalledWith({type:types.REQUESTING_USERS_LIST})
    });

    it('should handle RECEIVE_USERS_LIST', async () => {
        const mockData = ['123'];
        axios.get.mockResolvedValue({
            data: [...mockData]
        });
        await getUsersAsync()(dispatchFn);

        expect(dispatchFn).toHaveBeenLastCalledWith(
            {type: types.RECEIVE_USERS_LIST, users: mockData}
        )
    })
});