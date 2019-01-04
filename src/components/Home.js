import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import Todos from './Todos';

export class Home extends Component {
  state = {
    incremented: false,
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'FETCH_TODOS' });
  }

  increment = () => {
    this.setState({ incremented: true }, () => console.log(this.state));
  }

  render() {
    const { dispatch, value, todos } = this.props;
    console.log(todos);

    return (
      <div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <img src="images/cat.jpg" />

        <Todos todos={todos} />
        <Counter
          value={value}
          onIncrement={() => { dispatch({ type: 'INCREMENT' }); }}
          onDecrement={() => dispatch({ type: 'DECREMENT' })}
          onIncrementAsync={() => dispatch({ type: 'INCREMENT_ASYNC' })}
        />,
        <div>
          <div>
            <button className="button-increment" onClick={this.increment}>Click!</button>
          </div>
          {
            this.state.incremented ? <div>Incremented!</div> : null
          }
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  value: state.counter,
  todos: state.todos.map((todo) => ({ text: todo.title || todo.text, id: todo.id })),
});

export default connect(mapState)(Home);
