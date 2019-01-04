import 'es6-promise/auto';
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Simple from './Simple';
import { mockTodos } from '../test/mockTodos';

const fetchData = fetch('https://jsonplaceholder.typicode.com/todos', mockTodos);

const WrappedSimple = () => <Simple fetchData={fetchData} />

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={WrappedSimple} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
