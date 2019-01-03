import todos from './todos';
import { mockTodos } from '../test/mockTodos';

const fetchSuccessEmpty = {
  type: 'FETCH_TODOS_SUCCESS',
  todos: [],
};

test('todos reducer with empty array', () => {
  const actual = todos(null, fetchSuccessEmpty);
  const expected = [];
  expect(actual).toEqual(expected);
});

const fetchSuccess = {
  type: 'FETCH_TODOS_SUCCESS',
  todos: mockTodos,
};

test('todos reducer with todos', () => {
  const actual = todos(null, fetchSuccess);
  const expected = fetchSuccess.todos;
  expect(actual).toEqual(expected);
  expect(actual.length).toBeGreaterThan(0);
});
