import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render Login Page', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});


test('should call startLogoin on button click', () => {
    const startLogoin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/> )
    expect(startLogin).toHaveBeenCalled();  
});
