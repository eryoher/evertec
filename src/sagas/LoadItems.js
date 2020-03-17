import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getLoadItems,
    confirmLoadItems,
    confirmTableItems
} from '../api/LoadItems'

import {
    GET_LOAD_ITEMS,
    CONFIRM_LOAD_ITEMS,
    CONFIRM_TABLE_ITEMS
} from '../constants/ActionsTypes';

import {
    getLoadItemsSuccess,
    confirmLoadItemsSuccess,
    confirmTableItemsSuccess
} from '../actions/LoadItems';


function* getLoadItemsRequest({ payload }) {
    try {
        const loadItems = yield call(getLoadItems, payload);
        yield put(getLoadItemsSuccess(loadItems));
    } catch (error) {
    }
}

function* confirmLoadItemsRequest({ payload }) {
    try {
        const loadItems = yield call(confirmLoadItems, payload);
        yield put(confirmLoadItemsSuccess(loadItems));
    } catch (error) {
    }
}

function* confirmTableItemsRequest({ payload }) {
    try {
        const items = yield call(confirmTableItems, payload);
        yield put(confirmTableItemsSuccess(items));
    } catch (error) {
    }
}

export function* getLoadItemsSaga() {
    yield takeEvery(GET_LOAD_ITEMS, getLoadItemsRequest);
}

export function* confirmLoadItemsSaga() {
    yield takeEvery(CONFIRM_LOAD_ITEMS, confirmLoadItemsRequest);
}

export function* confirmTableItemsSaga() {
    yield takeEvery(CONFIRM_TABLE_ITEMS, confirmTableItemsRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getLoadItemsSaga),
        fork(confirmLoadItemsSaga),
        fork(confirmTableItemsSaga),
    ]);
}