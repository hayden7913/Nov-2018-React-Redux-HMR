import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import { mount, shallow } from 'enzyme';
import Simple from '../components/Simple';
import { mockTodos } from './mockTodos';

Enzyme.configure({ adapter: new Adapter() });

const callApi = () => Promise.resolve({ success: true });

class App extends React.Component {
  state = { success: false };

  componentDidMount() {
    callApi().then(state => this.setState(state));
  }

  render() {
    if (this.state.success) {
      return (<div> data is ready! </div>);
    }
    return (<div> spinner! </div>);
  }
}

test('test', async() => {
  const wrapper = mount(<App  />);
  console.log(wrapper.state());
  console.log(wrapper.text());
  await Promise.resolve();
  console.log(wrapper.text());
  console.log(wrapper.state());
});
