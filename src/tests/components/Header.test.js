import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';




// virtually render component
// react-test-renderer


test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();  
 
//    expect(toJSON(wrapper)).toMatchSnapshot();   
//  const renderer u= new ReactShallowRenderer();
//  renderer.render(<Header />);  
//  expect(renderer.getRenderOutput()).toMatchSnapshot();
//  console.log(renderer.getRenderOutput());


});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/> )
    expect(startLogout).toHaveBeenCalled();  
});

