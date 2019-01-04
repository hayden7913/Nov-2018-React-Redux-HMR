import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <li>
        <div className="view">
          <input className="toggle"
            type="checkbox"
          />
          <label>
            {todo.text}
          </label>
        </div>
      </li>
    );
  }
}


export default TodoItem;
