import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';

import App from './components/App';

import './index.scss';
import './styles/icons/style.css';

const store = configureStore();

const render = Component => (
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
);

render(App);
if (module.hot) module.hot.accept('./components/App', () => render(App));
