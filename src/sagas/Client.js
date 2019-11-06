import { all, call, fork, put, takeEvery } from 'redux-saga/effects';


import {
  getClient, searchClients, confirmationClient
} from '../api/Client'

import {
  GET_CLIENT, SEARCH_CLIENTS, CONFIRMATION_CLIENT
} from '../constants/ActionsTypes';

import {
  getClientSuccess, searchClientsSuccess, confirmationClientSuccess
} from '../actions/Client';


function* getClientRequest({ payload }) {
  try {
    const client = yield call(getClient, payload);
    yield put(getClientSuccess(client));
  } catch (error) {
  }
}

function* searchClientsRequest({ payload }) {
  try {
    const clients = yield call(searchClients, payload);
    yield put(searchClientsSuccess(clients));
  } catch (error) {
  }
}

function* confirmationClientRequest({ payload }) {
  try {
    const confirmation = yield call(confirmationClient, payload);
    yield put(confirmationClientSuccess(confirmation));
  } catch (error) {
  }
}

export function* getClientSaga() {
  yield takeEvery(GET_CLIENT, getClientRequest);
}

export function* searchClientsSaga() {
  yield takeEvery(SEARCH_CLIENTS, searchClientsRequest);
}

export function* confirmationClientSaga() {
  yield takeEvery(CONFIRMATION_CLIENT, confirmationClientRequest);
}

export default function* rootSaga() {
  yield all([
    fork(getClientSaga),
    fork(searchClientsSaga),
    fork(confirmationClientSaga),
  ]);
}