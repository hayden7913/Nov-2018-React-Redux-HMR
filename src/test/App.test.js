import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import { mount } from 'enzyme';
import Simple from '../components/Simple';
import { mockTodos } from './mockTodos';

Enzyme.configure({ adapter: new Adapter() });

const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

test('test', () => {
  fetchMock.mock('https://jsonplaceholder.typicode.com/todos', mockTodos);
  const wrapper = mount(<Simple />);

  return flushAllPromises().then(() => {
    expect(wrapper.text()).toEqual(' data is ready! ');
  });
});
