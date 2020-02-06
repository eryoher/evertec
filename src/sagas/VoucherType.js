import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
  getVoucherType,
  getVoucherTypeByUser,
  voucherCancel,
  voucherSave
} from '../api/VoucherType'

import {
  GET_VOUCHER_TYPE, GET_VOUCHER_TYPE_BY_USER, VOUCHER_CANCEL, VOUCHER_SAVE_AND_NEW
} from '../constants/ActionsTypes';

import {
  getVoucherTypeSuccess, getVoucherTypeByUserSuccess, voucherSaveAndNewSuccess
} from '../actions/VoucherType';
import { voucherCancelSuccess } from 'actions';


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
    //console.log('algun error', error)
  }
}

function* voucherCancelRequest({ payload }) {
  try {
    const cancel = yield call(voucherCancel, payload);
    yield put(voucherCancelSuccess(cancel));
  } catch (error) {
  }
}

function* voucherSaveAndNewRequest({ payload }) {
  try {
    const voucher = yield call(voucherSave, payload);
    yield put(voucherSaveAndNewSuccess(voucher));
  } catch (error) {
  }
}

export function* getVoucherTypeSaga() {
  yield takeEvery(GET_VOUCHER_TYPE, getVoucherTypeRequest);
}

export function* getVoucherTypeByUserSaga() {
  yield takeEvery(GET_VOUCHER_TYPE_BY_USER, getVoucherTypeByUserRequest);
}

export function* voucherCancelSaga() {
  yield takeEvery(VOUCHER_CANCEL, voucherCancelRequest);
}

export function* voucherSaveAndNewSaga() {
  yield takeEvery(VOUCHER_SAVE_AND_NEW, voucherSaveAndNewRequest);
}

export default function* rootSaga() {
  yield all([
    fork(getVoucherTypeSaga),
    fork(getVoucherTypeByUserSaga),
    fork(voucherCancelSaga),
    fork(voucherSaveAndNewSaga)
  ]);
}