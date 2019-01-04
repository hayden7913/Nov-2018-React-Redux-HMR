import React from 'react';
import 'raf/polyfill';
import Enzyme  from 'enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../components/Counter';

Enzyme.configure({ adapter: new Adapter() });


test('Counter', () => {
  const onButtonClick = sinon.spy();
  const wrapper = shallow(<Counter onIncrement={onButtonClick}/>);
  const incButton = wrapper.find('.button-increment');
  incButton.simulate('click');
  incButton.simulate('click');

  expect(onButtonClick.callCount).toBe(2);
});
