import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getClientHeadboard,
    getGenerateItems,
    getGeneratesalesAffected,
    finishGenerate,
    printGenerate,
    changeTableItems,
    changeTableAffect
} from '../api/Generate'

import {
    GET_CLIENT_HEADBOARD,
    GET_GENERATE_ITEMS,
    GET_GENERATE_SALES_AFFECTED,
    FINISH_GENERATE,
    PRINT_GENERATE,
    CHANGE_TABLE_ITEMS,
    CHANGE_TABLE_AFFECT
} from '../constants/ActionsTypes';

import {
    getClientHeadboardSuccess,
    getGenerateItemsSuccess,
    getGeneratesalesAffectedSuccess,
    finishGenerateSuccess,
    printGenerateSuccess,
    changeTableItemsSuccess,
    changeTableAffectSuccess
} from '../actions/Generate';


function* getClientHeadboardRequest({ payload }) {
    try {
        const client = yield call(getClientHeadboard, payload);
        yield put(getClientHeadboardSuccess(client));
    } catch (error) {
    }
}

function* getGenerateItemsRequest({ payload }) {
    try {
        const items = yield call(getGenerateItems, payload);
        yield put(getGenerateItemsSuccess(items));
    } catch (error) {
    }
}

function* getGeneratesalesAffectedRequest({ payload }) {
    try {
        const salesAffected = yield call(getGeneratesalesAffected, payload);
        yield put(getGeneratesalesAffectedSuccess(salesAffected));
    } catch (error) {
    }
}

function* finishGenerateRequest({ payload }) {
    try {
        const generated = yield call(finishGenerate, payload);
        yield put(finishGenerateSuccess(generated));
    } catch (error) {
    }
}

function* printGenerateRequest({ payload }) {
    try {
        const printed = yield call(printGenerate, payload);
        yield put(printGenerateSuccess(printed));
    } catch (error) {
    }
}

function* changeTableItemsRequest({ payload }) {
    try {
        const items = yield call(changeTableItems, payload);
        yield put(changeTableItemsSuccess(items));
    } catch (error) {
    }
}

function* changeTableAffectRequest({ payload }) {
    try {
        const items = yield call(changeTableAffect, payload);
        yield put(changeTableAffectSuccess(items));
    } catch (error) {
    }
}

export function* getClientHeadboardSaga() {
    yield takeEvery(GET_CLIENT_HEADBOARD, getClientHeadboardRequest);
}

export function* getGenerateItemsSaga() {
    yield takeEvery(GET_GENERATE_ITEMS, getGenerateItemsRequest);
}

export function* getGeneratesalesAffectedSaga() {
    yield takeEvery(GET_GENERATE_SALES_AFFECTED, getGeneratesalesAffectedRequest);
}

export function* finishGenerateSaga() {
    yield takeEvery(FINISH_GENERATE, finishGenerateRequest);
}

export function* printGenerateSaga() {
    yield takeEvery(PRINT_GENERATE, printGenerateRequest);
}

export function* changeTableItemsSaga() {
    yield takeEvery(CHANGE_TABLE_ITEMS, changeTableItemsRequest);
}

export function* changeTableAffectSaga() {
    yield takeEvery(CHANGE_TABLE_AFFECT, changeTableAffectRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getClientHeadboardSaga),
        fork(getGenerateItemsSaga),
        fork(getGeneratesalesAffectedSaga),
        fork(finishGenerateSaga),
        fork(printGenerateSaga),
        fork(changeTableItemsSaga),
        fork(changeTableAffectSaga),
    ]);
}