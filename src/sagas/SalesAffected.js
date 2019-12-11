import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    salesAffectedValidate,
    salesAffectedCant,
    salesAffectedSubCalculation,
    salesAffectedConfirm,
    salesAffectedImport,
    salesAffectedImportValidate,
    salesAffectedImportConfirm
} from '../api/SalesAffected'

import {
    SALES_AFFECTED_VALIDATE, SALES_AFFECTED_QUANTITY, SALES_AFFECTED_SUB_CALCULATION, SALES_AFFECTED_CONFIRM, SET_TABLE_DATA_INVOLVEMENT, SALES_AFFECTED_IMPORT, SALES_AFFECTED_IMPORT_VALIDATE, SALES_AFFECTED_IMPORT_CONFIRM
} from '../constants/ActionsTypes';


import { salesAffectedValidateSuccess, salesAffectedCantSuccess, salesAffectedSubCalculationSuccess, salesAffectedConfirmSuccess, setTableDataInvolvementSuccess, salesAffectedImportSuccess, salesAffectedImportValidateSuccess, salesAffectedImportConfirmSuccess } from 'actions';


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
    try {
        const salesconfirm = yield call(salesAffectedConfirm, payload);
        yield put(salesAffectedConfirmSuccess(salesconfirm));
    } catch (error) {
    }
}

function* salesAffectedImportConfirmRequest({ payload }) {
    try {
        const salesconfirm = yield call(salesAffectedImportConfirm, payload);
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


export default function* rootSaga() {
    yield all([
        fork(salesAffectedValidateSaga),
        fork(salesAffectedCantSaga),
        fork(salesAffectedSubCalculationSaga),
        fork(salesAffectedConfirmSaga),
        fork(salesAffectedImportSaga),
        fork(salesAffectedImportValidateSaga),
        fork(salesAffectedImportConfirmSaga),

    ]);
}