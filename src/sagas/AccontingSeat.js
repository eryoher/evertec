import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getVoucherAccounting
} from '../api/AccountingSeat';

import {
    GET_VOUCHER_ACCOUNTING
} from '../constants/ActionsTypes';


import {
    getVoucherAccountingSuccess
} from 'actions';

function* getVoucherAccountingRequest({ payload }) {
    try {
        const accountingSeats = yield call(getVoucherAccounting, payload);
        yield put(getVoucherAccountingSuccess(accountingSeats));
    } catch (error) {
    }
}

export function* getVoucherAccountingSaga() {
    yield takeEvery(GET_VOUCHER_ACCOUNTING, getVoucherAccountingRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getVoucherAccountingSaga),
    ]);
}