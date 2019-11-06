import { all, call, fork, put, takeEvery } from 'redux-saga/effects';


import {
  getVoucherType,
  getVoucherTypeByUser
} from '../api/VoucherType'

import {
  GET_VOUCHER_TYPE, GET_VOUCHER_TYPE_BY_USER
} from '../constants/ActionsTypes';

import {
  getVoucherTypeSuccess, getVoucherTypeByUserSuccess
} from '../actions/VoucherType';


function* getVoucherTypeRequest({ payload }) {
  try {
    const type = yield call(getVoucherType, payload);
    yield put(getVoucherTypeSuccess(type));
  } catch (error) {
  }
}

function* getVoucherTypeByUserRequest({ payload }) {
  try {
    const voucherTypes = yield call(getVoucherTypeByUser, payload);
    yield put(getVoucherTypeByUserSuccess(voucherTypes));
  } catch (error) {
  }
}

export function* getVoucherTypeSaga() {
  yield takeEvery(GET_VOUCHER_TYPE, getVoucherTypeRequest);
}

export function* getVoucherTypeByUserSaga() {
  yield takeEvery(GET_VOUCHER_TYPE_BY_USER, getVoucherTypeByUserRequest);
}

export default function* rootSaga() {
  yield all([
    fork(getVoucherTypeSaga),
    fork(getVoucherTypeByUserSaga)
  ]);
}