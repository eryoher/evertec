import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    salesAffectedValidate,
    salesAffectedCant,
    salesAffectedSubCalculation,
    salesAffectedConfirm,
    salesAffectedImport,
    salesAffectedImportValidate,
    salesAffectedImportConfirm,
    salesAffectedState,
    salesAffectedStateValidate,
    salesAffectedStateConfirm
} from '../api/SalesAffected'

import {
    SALES_AFFECTED_VALIDATE,
    SALES_AFFECTED_QUANTITY,
    SALES_AFFECTED_SUB_CALCULATION,
    SALES_AFFECTED_CONFIRM,
    SALES_AFFECTED_IMPORT,
    SALES_AFFECTED_IMPORT_VALIDATE,
    SALES_AFFECTED_IMPORT_CONFIRM,
    SALES_AFFECTED_STATE,
    SALES_AFFECTED_STATE_VALIDATE,
    SALES_AFFECTED_STATE_CONFIRM
} from '../constants/ActionsTypes';


import {
    salesAffectedValidateSuccess,
    salesAffectedCantSuccess,
    salesAffectedSubCalculationSuccess,
    salesAffectedConfirmSuccess,
    salesAffectedImportSuccess,
    salesAffectedImportValidateSuccess,
    salesAffectedImportConfirmSuccess,
    salesAffectedStateSuccess,
    salesAffectedStateValidateSuccess,
    salesAffectedStateConfirmSuccess
} from 'actions';


function* salesAffectedValidateRequest({ payload }) {
    try {
        const items = yield call(salesAffectedValidate, payload);
        yield put(salesAffectedValidateSuccess(items));
    } catch (error) {
    }
}

function* salesAffectedImportValidateRequest({ payload }) {
    try {
        const items = yield call(salesAffectedImportValidate, payload);
        yield put(salesAffectedImportValidateSuccess(items));
    } catch (error) {
    }
}

function* salesAffectedCantRequest({ payload }) {
    try {
        const products = yield call(salesAffectedCant, payload);
        yield put(salesAffectedCantSuccess(products));
    } catch (error) {
    }
}


function* salesAffectedSubCalculationRequest({ payload }) {
    try {
        const subCalculations = yield call(salesAffectedSubCalculation, payload);
        yield put(salesAffectedSubCalculationSuccess(subCalculations));
    } catch (error) {
    }
}

function* salesAffectedConfirmRequest({ payload }) {
    const { items, callBackReturn } = payload;
    try {
        const salesconfirm = yield call(salesAffectedConfirm, items);
        callBackReturn();
        yield put(salesAffectedConfirmSuccess(salesconfirm));
    } catch (error) {
    }
}

function* salesAffectedImportConfirmRequest({ payload }) {
    const { items, callBackReturn } = payload;
    try {
        const salesconfirm = yield call(salesAffectedImportConfirm, items);
        callBackReturn();
        yield put(salesAffectedImportConfirmSuccess(salesconfirm));
    } catch (error) {
    }
}

function* salesAffectedImportRequest({ payload }) {
    try {
        const items = yield call(salesAffectedImport, payload);
        yield put(salesAffectedImportSuccess(items));
    } catch (error) {
    }
}

function* salesAffectedStateRequest({ payload }) {
    try {
        const items = yield call(salesAffectedState, payload);
        yield put(salesAffectedStateSuccess(items));
    } catch (error) {
    }
}


function* salesAffectedStateValidateRequest({ payload }) {
    try {
        const itemsValidate = yield call(salesAffectedStateValidate, payload);
        yield put(salesAffectedStateValidateSuccess(itemsValidate));
    } catch (error) {
    }
}

function* salesAffectedStateConfirmRequest({ payload }) {
    try {
        const confirmState = yield call(salesAffectedStateConfirm, payload);
        yield put(salesAffectedStateConfirmSuccess(confirmState));
    } catch (error) {
    }
}

export function* salesAffectedValidateSaga() {
    yield takeEvery(SALES_AFFECTED_VALIDATE, salesAffectedValidateRequest);
}

export function* salesAffectedImportValidateSaga() {
    yield takeEvery(SALES_AFFECTED_IMPORT_VALIDATE, salesAffectedImportValidateRequest);
}

export function* salesAffectedCantSaga() {
    yield takeEvery(SALES_AFFECTED_QUANTITY, salesAffectedCantRequest);
}

export function* salesAffectedSubCalculationSaga() {
    yield takeEvery(SALES_AFFECTED_SUB_CALCULATION, salesAffectedSubCalculationRequest);
}

export function* salesAffectedConfirmSaga() {
    yield takeEvery(SALES_AFFECTED_CONFIRM, salesAffectedConfirmRequest);
}

export function* salesAffectedImportConfirmSaga() {
    yield takeEvery(SALES_AFFECTED_IMPORT_CONFIRM, salesAffectedImportConfirmRequest);
}

export function* salesAffectedImportSaga() {
    yield takeEvery(SALES_AFFECTED_IMPORT, salesAffectedImportRequest);
}

export function* salesAffectedStateSaga() {
    yield takeEvery(SALES_AFFECTED_STATE, salesAffectedStateRequest);
}

export function* salesAffectedStateValidateSaga() {
    yield takeEvery(SALES_AFFECTED_STATE_VALIDATE, salesAffectedStateValidateRequest);
}
export function* salesAffectedStateConfirmSaga() {
    yield takeEvery(SALES_AFFECTED_STATE_CONFIRM, salesAffectedStateConfirmRequest);
}

export default function* rootSaga() {
    yield all([
        fork(salesAffectedValidateSaga),
        fork(salesAffectedCantSaga),
        fork(salesAffectedSubCalculationSaga),
        fork(salesAffectedConfirmSaga),
        fork(salesAffectedImportSaga),
        fork(salesAffectedImportValidateSaga),
        fork(salesAffectedImportConfirmSaga),
        fork(salesAffectedStateSaga),
        fork(salesAffectedStateValidateSaga),
        fork(salesAffectedStateConfirmSaga),
    ]);
}