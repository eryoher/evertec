import { all, call, fork, put, takeEvery } from 'redux-saga/effects';


import {
    GET_VOUCHER_TAXES, TAXES_VALIDATE_ROW, TAXES_CONFIRM
} from '../constants/ActionsTypes';


import {
    getVoucherTaxesSuccess, taxesValidateRowSuccess, taxesConfirmSuccess
} from 'actions';

import {
    getVoucherTaxes,
    taxesValidateRow,
    taxesConfirm
} from '../api/AccountingVoucher';

function* getVoucherTaxesRequest({ payload }) {
    try {
        const taxes = yield call(getVoucherTaxes, payload);
        yield put(getVoucherTaxesSuccess(taxes));
    } catch (error) {
    }
}

function* taxesValidateRowRequest({ payload }) {
    try {
        const validate = yield call(taxesValidateRow, payload);
        yield put(taxesValidateRowSuccess(validate));
    } catch (error) {
    }
}

function* taxesConfirmRequest({ payload }) {
    try {
        const confirm = yield call(taxesConfirm, payload);
        yield put(taxesConfirmSuccess(confirm));
    } catch (error) {
    }
}

export function* getVoucherTaxesSaga() {
    yield takeEvery(GET_VOUCHER_TAXES, getVoucherTaxesRequest);
}

export function* taxesValidateRowSaga() {
    yield takeEvery(TAXES_VALIDATE_ROW, taxesValidateRowRequest);
}

export function* taxesConfirmSaga() {
    yield takeEvery(TAXES_CONFIRM, taxesConfirmRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getVoucherTaxesSaga),
        fork(taxesValidateRowSaga),
        fork(taxesConfirmSaga),
    ]);
}