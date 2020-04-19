import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';
import { CREATE_ORDER, GET_ORDERS, GET_PAYMENT_BY_CODE, GET_ORDER } from 'constants/ActionsTypes';
import { createOrderSuccess, getOrdersSuccess, getPaymentByCodeSuccess, getOrderSuccess } from 'actions';

import {
  createOrder,
  getOrder,
  getOrders,
  getPaymentByCode
} from '../api/Orders'

function* createOrderRequest({ payload }) {
  try {
    const order = yield call(createOrder, payload);
    yield put(createOrderSuccess(order));
  } catch (error) {
  }
}

function* getOrdersRequest({ payload }) {
  try {
    const orders = yield call(getOrders, payload);
    yield put(getOrdersSuccess(orders));
  } catch (error) {
  }
}

function* getOrderRequest({ payload }) {
  try {
    const order = yield call(getOrder, payload);
    yield put(getOrderSuccess(order));
  } catch (error) {
  }
}

function* getPaymentByCodeRequest({ payload }) {
  try {
    const payment = yield call(getPaymentByCode, payload);
    yield put(getPaymentByCodeSuccess(payment));
  } catch (error) {
  }
}

export function* createOrderSaga() {
  yield takeEvery(CREATE_ORDER, createOrderRequest);
}

export function* getOrdersSaga() {
  yield takeEvery(GET_ORDERS, getOrdersRequest);
}

export function* getOrderSaga() {
  yield takeEvery(GET_ORDER, getOrderRequest);
}

export function* getPaymentByCodeSaga() {
  yield takeEvery(GET_PAYMENT_BY_CODE, getPaymentByCodeRequest);
}

export default function* rootSaga() {
  yield all([
    fork(createOrderSaga),
    fork(getOrdersSaga),
    fork(getOrderSaga),
    fork(getPaymentByCodeSaga),
  ]);
}