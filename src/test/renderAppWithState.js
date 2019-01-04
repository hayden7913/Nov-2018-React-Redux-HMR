import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from '../components/App';
import configureStore from '../store/configureStore';
const store = configureStore();

export default function renderAppWithState() {
  const wrapper = mount(
    <Provider store={store}>
      <App/>
    </Provider>
  );
  return wrapper;
}
