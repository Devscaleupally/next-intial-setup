import { all, call } from 'redux-saga/effects';
import userSaga from './handlers/userHandlers';

export default function* rootSaga() {
    yield all([
        call(userSaga),
    ]);
}
