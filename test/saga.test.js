import 'babel-polyfill';
import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

const gen = incrementAsync();

const expected = gen.next().value;
const actual = call(delay, 1000);

test('sandbox', () => {
  expect(expected).toEqual(actual);
});

test('sandbox', () => {
  expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }));
});
