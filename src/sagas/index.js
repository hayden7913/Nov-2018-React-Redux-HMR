import 'babel-polyfill';
import axios from 'axios';
import { delay } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export const requestTodos = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  return todos.slice(0, 10);
};

export function* fetchTodos() {
  const todos = yield call(requestTodos);
  yield put({
    type: 'FETCH_TODOS_SUCCESS',
    todos,
  });

  return todos;
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* watchFetchTodos() {
  yield takeEvery('FETCH_TODOS', fetchTodos);
}
export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchIncrementAsync()
  ]);
}
