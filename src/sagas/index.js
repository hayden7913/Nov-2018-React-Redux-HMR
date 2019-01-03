import 'babel-polyfill';
import axios from 'axios';
import { delay } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

const requestTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

export function* fetchTodos() {
  const todos = yield call(requestTodos);
  console.log(todos);
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
