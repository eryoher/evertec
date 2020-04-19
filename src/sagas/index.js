import { all } from 'redux-saga/effects';
import ordersSaga from './Orders';

export default function* rootSaga(getState) {
  yield all([
    ordersSaga()
  ]);
}
