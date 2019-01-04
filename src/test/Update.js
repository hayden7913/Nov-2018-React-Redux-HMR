import React from 'react';
import 'raf/polyfill';
import Enzyme  from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from '../components/Home';

Enzyme.configure({ adapter: new Adapter() });


test('Home', () => {
  const onButtonClick = jest.fn();
  const dispatch = jest.fn();
  const wrapper = mount(<Home dispatch={dispatch} onClick={onButtonClick}/>);
  const incButton = wrapper.find('.button-increment');
  incButton.simulate('click');
  console.log(wrapper.state())
  expect(wrapper.state().incremented).toBe(true);
});
