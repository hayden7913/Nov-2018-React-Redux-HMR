import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import MainSection from './MainSection';

class Home extends Component {
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

    return (
      <div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <img src="images/cat.jpg" />
        <MainSection todos={todos} />
        <Counter
          value={value}
          onIncrement={() =>{ dispatch({ type: 'INCREMENT' }); this.increment(); }}
          onDecrement={() => dispatch({ type: 'DECREMENT' })}
          onIncrementAsync={() => dispatch({ type: 'INCREMENT_ASYNC' })}
        />,
      </div>
    );
  }
}

const mapState = state => ({
  value: state.counter,
  todos: state.todos.map((todo) => ({ text: todo.title, id: todo.id })),
});

export default connect(mapState)(Home);
