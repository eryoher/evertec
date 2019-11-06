import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getConfigVoucher,
    getVoucherHead,
    voucherHeadAuto,
    voucherHeadValidatekey,
    voucherHeadCheckDate,
} from '../api/Voucher'

import {
    GET_CONFIG_VOUCHER,
    GET_VOUCHER_HEAD,
    VOUCHER_HEAD_AUTO,
    VOUCHER_HEAD_VALIDATE_KEY,
    VOUCHER_HEAD_CHECK_DATE,

} from '../constants/ActionsTypes';


import {
    getConfigVoucherSuccess,
    getVoucherHeadSuccess,
    voucherHeadAutoSuccess,
    voucherHeadValidatekeySuccess,
    voucherHeadCheckDateSuccess,
} from '../actions/Voucher';


function* getConfigVoucherRequest({ payload }) {
    try {
        const config = yield call(getConfigVoucher, payload);
        yield put(getConfigVoucherSuccess(config));
    } catch (error) {
    }
}

function* getVoucherHeadRequest({ payload }) {
    try {
        const headData = yield call(getVoucherHead, payload);
        yield put(getVoucherHeadSuccess(headData));
    } catch (error) {
    }
}

function* voucherHeadAutoRequest({ payload }) {
    try {
        const autoData = yield call(voucherHeadAuto, payload);
        yield put(voucherHeadAutoSuccess(autoData));
    } catch (error) {
    }
}

function* voucherHeadValidatekeyRequest({ payload }) {
    try {
        const validate = yield call(voucherHeadValidatekey, payload);
        yield put(voucherHeadValidatekeySuccess(validate));
    } catch (error) {
    }
}

function* voucherHeadCheckDateRequest({ payload }) {
    try {
        const checkDate = yield call(voucherHeadCheckDate, payload);
        yield put(voucherHeadCheckDateSuccess(checkDate));
    } catch (error) {
    }
}


export function* getConfigVoucherSaga() {
    yield takeEvery(GET_CONFIG_VOUCHER, getConfigVoucherRequest);
}

export function* getVoucherHeadSaga() {
    yield takeEvery(GET_VOUCHER_HEAD, getVoucherHeadRequest);
}

export function* voucherHeadAutoSaga() {
    yield takeEvery(VOUCHER_HEAD_AUTO, voucherHeadAutoRequest);
}

export function* voucherHeadValidatekeySaga() {
    yield takeEvery(VOUCHER_HEAD_VALIDATE_KEY, voucherHeadValidatekeyRequest);
}

export function* voucherHeadCheckDateSaga() {
    yield takeEvery(VOUCHER_HEAD_CHECK_DATE, voucherHeadCheckDateRequest);
}



export default function* rootSaga() {
    yield all([
        fork(getConfigVoucherSaga),
        fork(getVoucherHeadSaga),
        fork(voucherHeadAutoSaga),
        fork(voucherHeadValidatekeySaga),
        fork(voucherHeadCheckDateSaga),
    ]);
}