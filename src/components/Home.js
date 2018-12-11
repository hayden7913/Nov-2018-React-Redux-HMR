import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'FETCH_TODOS' });
  }

  render() {
    const { dispatch, value } = this.props;
    return (
      <div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <div className="icon-home"></div>
        <img src="images/cat.jpg" />
        <Counter
          value={value}
          onIncrement={() => dispatch({ type: 'INCREMENT' })}
          onDecrement={() => dispatch({ type: 'DECREMENT' })}
          onIncrementAsync={() => dispatch({ type: 'INCREMENT_ASYNC' })}
        />,
      </div>
    );
  }
}

const mapState = state => ({
  value: state.counter,
});

export default connect(mapState)(Home);
