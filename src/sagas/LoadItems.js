import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getLoadItems,
    confirmLoadItems
} from '../api/LoadItems'

import {
    GET_LOAD_ITEMS,
    CONFIRM_LOAD_ITEMS
} from '../constants/ActionsTypes';

import {
    getLoadItemsSuccess,
    confirmLoadItemsSuccess
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

export function* getLoadItemsSaga() {
    yield takeEvery(GET_LOAD_ITEMS, getLoadItemsRequest);
}

export function* confirmLoadItemsSaga() {
    yield takeEvery(CONFIRM_LOAD_ITEMS, confirmLoadItemsRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getLoadItemsSaga),
        fork(confirmLoadItemsSaga),
    ]);
}