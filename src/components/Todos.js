import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    const { todos } = this.props;
    return (
      <section className="main">
        Todo List
        <ul className="todo-list">
          {todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} />
          )}
        </ul>
      </section>
    );
  }
}

export default Todos;
