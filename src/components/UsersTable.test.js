import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UsersTable } from './UsersTable';
import Indicator  from './LoadingIndicator';

configure({ adapter: new Adapter() });

describe('users table', () => {
    const getUsersFn = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UsersTable
            isFetching={false}
            users={[]}
            getUsers={getUsersFn}
        />);
    });

    it('should exist', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render loading indicator', () => {
        wrapper.setProps({
            isFetching: true
        });
        expect(wrapper.find(Indicator)).toHaveLength(1);
    });

    it('should render users table', () => {
        wrapper.setProps({
            isFetching: false
        });
        expect(wrapper.find('div')).toHaveLength(1);
    });


    // it('should render table data', () => {
    //     wrapper.setProps({
    //         isFetching: false
    //     });
    //     const tds = [1, 2, 3, 4]
    //     // expect(wrapper.find('.columns')).toBeDefined();
    //     expect(wrapper.find('td')).toHaveLength(tds.length);
    // })


    // it('calls componentDidMount', () => {
    //     expect(getUsersFn).toHaveBeenCalled()
    // });


});