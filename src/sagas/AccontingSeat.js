import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getVoucherAccounting,
    searchAccount,
    getAccountDetail,
    accountValidate,
    accountConfirm
} from '../api/AccountingSeat';

import {
    GET_VOUCHER_ACCOUNTING, SEARCH_ACCOUNT, GET_ACCOUNT_DETAIL, ACCOUNT_VALIDATE, ACCOUNT_CONFIRM
} from '../constants/ActionsTypes';


import {
    getVoucherAccountingSuccess, searchAccountSuccess, getAccountDetailSuccess, accountValidateSuccess, accountConfirmSuccess
} from 'actions';

function* getVoucherAccountingRequest({ payload }) {
    try {
        const accountingSeats = yield call(getVoucherAccounting, payload);
        yield put(getVoucherAccountingSuccess(accountingSeats));
    } catch (error) {
    }
}

function* searchAccountRequest({ payload }) {
    try {
        const search = yield call(searchAccount, payload);
        yield put(searchAccountSuccess(search));
    } catch (error) {
    }
}


function* getAccountDetailRequest({ payload }) {
    try {
        const account = yield call(getAccountDetail, payload);
        yield put(getAccountDetailSuccess(account));
    } catch (error) {
    }
}


function* accountValidateRequest({ payload }) {
    try {
        const validate = yield call(accountValidate, payload);
        yield put(accountValidateSuccess(validate));
    } catch (error) {
    }
}

function* accountConfirmRequest({ payload }) {
    const { idOperacion, callBackReturn } = payload;

    try {
        const comfirm = yield call(accountConfirm, { idOperacion });
        callBackReturn();
        yield put(accountConfirmSuccess(comfirm));
    } catch (error) {
    }
}

export function* getVoucherAccountingSaga() {
    yield takeEvery(GET_VOUCHER_ACCOUNTING, getVoucherAccountingRequest);
}

export function* searchAccountSaga() {
    yield takeEvery(SEARCH_ACCOUNT, searchAccountRequest);
}

export function* getAccountDetailSaga() {
    yield takeEvery(GET_ACCOUNT_DETAIL, getAccountDetailRequest);
}

export function* accountValidateSaga() {
    yield takeEvery(ACCOUNT_VALIDATE, accountValidateRequest);
}

export function* accountConfirmSaga() {
    yield takeEvery(ACCOUNT_CONFIRM, accountConfirmRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getVoucherAccountingSaga),
        fork(searchAccountSaga),
        fork(getAccountDetailSaga),
        fork(accountValidateSaga),
        fork(accountConfirmSaga),
    ]);
}