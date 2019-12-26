import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getConfigVoucher,
    getVoucherHead,
    voucherHeadAuto,
    voucherHeadValidatekey,
    voucherHeadCheckDate,
    voucherHeadConfirm,
    getVoucherHeadInfo,
} from '../api/Voucher'

import {
    GET_CONFIG_VOUCHER,
    GET_VOUCHER_HEAD,
    VOUCHER_HEAD_AUTO,
    VOUCHER_HEAD_VALIDATE_KEY,
    VOUCHER_HEAD_CHECK_DATE,
    VOUCHER_HEAD_CONFIRM,
    GET_VOUCHER_HEAD_INFO,

} from '../constants/ActionsTypes';


import {
    getConfigVoucherSuccess,
    getVoucherHeadSuccess,
    voucherHeadAutoSuccess,
    voucherHeadValidatekeySuccess,
    voucherHeadCheckDateSuccess,
    voucherHeadConfirmSuccess,
    getVoucherHeadInfoSuccess,
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

function* voucherHeadConfirmRequest({ payload }) {
    try {
        const confirm = yield call(voucherHeadConfirm, payload);
        yield put(voucherHeadConfirmSuccess(confirm));
    } catch (error) {
    }
}

function* getVoucherHeadInfoRequest({ payload }) {
    try {
        const headInfo = yield call(getVoucherHeadInfo, payload);
        yield put(getVoucherHeadInfoSuccess(headInfo));
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

export function* voucherHeadConfirmSaga() {
    yield takeEvery(VOUCHER_HEAD_CONFIRM, voucherHeadConfirmRequest);
}

export function* getVoucherHeadInfoSaga() {
    yield takeEvery(GET_VOUCHER_HEAD_INFO, getVoucherHeadInfoRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getConfigVoucherSaga),
        fork(getVoucherHeadSaga),
        fork(voucherHeadAutoSaga),
        fork(voucherHeadValidatekeySaga),
        fork(voucherHeadCheckDateSaga),
        fork(getVoucherHeadInfoSaga),
        fork(voucherHeadConfirmSaga),
    ]);
}