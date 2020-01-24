import { all } from 'redux-saga/effects';
import authSagas from './Auth';
import clientSagas from './Client';
import voucherTypeSaga from './VoucherType';
import voucherSaga from './Voucher';
import productSaga from './Product';
import loadItemsSaga from './LoadItems';
import salesAffectedSaga from './SalesAffected';
import generateSaga from './Generate';
import accountingSeatSaga from './AccontingSeat';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    clientSagas(),
    voucherTypeSaga(),
    voucherSaga(),
    productSaga(),
    loadItemsSaga(),
    salesAffectedSaga(),
    generateSaga(),
    accountingSeatSaga()
  ]);
}
