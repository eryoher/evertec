import { all, call, fork, put, takeEvery } from 'redux-saga/effects';


import {
    GET_VOUCHER_TAXES
} from '../constants/ActionsTypes';


import {
    getVoucherTaxesSuccess
} from 'actions';

import {
    getVoucherTaxes,

} from '../api/AccountingVoucher';

function* getVoucherTaxesRequest({ payload }) {
    try {
        const taxes = yield call(getVoucherTaxes, payload);
        yield put(getVoucherTaxesSuccess(taxes));
    } catch (error) {
    }
}

export function* getVoucherTaxesSaga() {
    yield takeEvery(GET_VOUCHER_TAXES, getVoucherTaxesRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getVoucherTaxesSaga),

    ]);
}