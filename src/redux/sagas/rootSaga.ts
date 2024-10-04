import { all, fork } from 'redux-saga/effects';
import exampleSaga from './handlers/exampleSaga';

export default function* rootSaga() {
  yield all([
    fork(exampleSaga),
  ]);
}
