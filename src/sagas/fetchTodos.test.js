import 'babel-polyfill';
import fetchMock from 'fetch-mock';
import { runSaga } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { fetchTodos, requestTodos } from './index';
import { mockTodos } from '../test/mockTodos';

fetchMock.mock('https://jsonplaceholder.typicode.com/todos', mockTodos);

const gen = fetchTodos();

test('requestTodos', async() => {
  const actual = await requestTodos();
  expect(actual.length).toBeGreaterThan(0);
});

test('fetchTodo saga', () => {
  const actual = gen.next().value;
  const expected = call(requestTodos);
  expect(actual).toEqual(expected);
});

test('fetchTodo saga', () => {
  const actual = gen.next().value;
  const expected = put({
    type: 'FETCH_TODOS_SUCCESS',
    todos: undefined,
  });
  expect(actual).toEqual(expected);
});

describe('rdudududdud', () => {
  test('integrated', async() => {
    const dispatched = [];

    const actual = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ state: 'test' }),
    }, fetchTodos).done;

    const expected = [{
      type: 'FETCH_TODOS_SUCCESS',
      todos: mockTodos,
    }];

    expect(dispatched).toEqual(expected);
  });
});
