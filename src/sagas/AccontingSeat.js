import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getVoucherAccounting,
    searchAccount,
    getAccountDetail
} from '../api/AccountingSeat';

import {
    GET_VOUCHER_ACCOUNTING, SEARCH_ACCOUNT, GET_ACCOUNT_DETAIL
} from '../constants/ActionsTypes';


import {
    getVoucherAccountingSuccess, searchAccountSuccess, getAccountDetailSuccess
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

export function* getVoucherAccountingSaga() {
    yield takeEvery(GET_VOUCHER_ACCOUNTING, getVoucherAccountingRequest);
}

export function* searchAccountSaga() {
    yield takeEvery(SEARCH_ACCOUNT, searchAccountRequest);
}

export function* getAccountDetailSaga() {
    yield takeEvery(GET_ACCOUNT_DETAIL, getAccountDetailRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getVoucherAccountingSaga),
        fork(searchAccountSaga),
        fork(getAccountDetailSaga),
    ]);
}