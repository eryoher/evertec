import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { withRouter } from "react-router-dom"; // TODO jfarina: perhaps we should retrieve the router from AppConfiguration
import Axios from 'axios';

import {
  SIGNIN_USER,
  SIGNOUT_USER,
  GET_USER,
  GET_PERMISSIONS,
} from '../constants/ActionsTypes';

import {
  signInUser,
  getUser,
  getPermissions,
} from '../api/Auth'

import {
  getVoucherTypeByUser
} from '../api/VoucherType'

import {
  userSignInSuccess,
  userSignOutSuccess,
  getUserSuccess,
  getPermissionsSuccess,
} from '../actions/Auth';

import {
  showError,
} from '../actions/Common';

import { getVoucherTypeByUserSuccess } from 'actions';

function* signInUserRequest({ payload }) {
  try {
    const user = yield call(signInUser, payload);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', user.token);
    Axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    const voucherType = yield call(getVoucherTypeByUser);
    localStorage.setItem('userVoucherType', JSON.stringify(voucherType));

    yield put(userSignInSuccess(user));
    yield put(getVoucherTypeByUserSuccess(voucherType));
  } catch (error) {
    //console.log(error, error)
    if (error.response && error.response.status === 401) {
      yield put(showError('Invalid username or password'));
    } else if (!error.response && error.request && error.request.status === 0) {
      yield put(showError('Network error'));
    } else {
      yield put(showError('Error communicating with server'));
    }
  }
}

function* signOutUserRequest() {
  localStorage.removeItem('user');
  yield put(userSignOutSuccess());
}

function* getUserRequest() {
  try {
    const user = yield call(getUser);
    yield put(getUserSuccess(user));
  } catch (error) {
  }
}

function* getPermissionsRequest() {
  try {
    const permissions = yield call(getPermissions);
    yield put(getPermissionsSuccess(permissions));
  } catch (error) {
  }
}

export function* signInUserSaga() {
  yield takeEvery(SIGNIN_USER, signInUserRequest);
}

export function* signOutUserSaga() {
  yield takeEvery(SIGNOUT_USER, signOutUserRequest);
}

export function* getUserSaga() {
  yield takeEvery(GET_USER, getUserRequest);
}

export function* getPermissionsSaga() {
  yield takeEvery(GET_PERMISSIONS, getPermissionsRequest);
}

export default function* rootSaga() {
  yield all([
    fork(signInUserSaga),
    fork(signOutUserSaga),
    fork(getUserSaga),
    fork(getPermissionsSaga),
  ]);
}