import {
  GET_VOUCHER_TYPE,
  GET_VOUCHER_TYPE_SUCCESS,
  GET_VOUCHER_TYPE_BY_USER,
  GET_VOUCHER_TYPE_BY_USER_SUCCESS,
  VOUCHER_CANCEL,
  VOUCHER_CANCEL_SUCCESS,
  VOUCHER_SAVE_AND_NEW,
  VOUCHER_SAVE_AND_NEW_SUCCESS
} from '../constants/ActionsTypes';


export const getVoucherType = (params) => {
  return {
    type: GET_VOUCHER_TYPE,
    payload: params
  }
};

export const getVoucherTypeSuccess = (response) => {
  return {
    type: GET_VOUCHER_TYPE_SUCCESS,
    payload: response
  }
};

export const getVoucherTypeByUser = (params) => {
  return {
    type: GET_VOUCHER_TYPE_BY_USER,
    payload: params
  }
};

export const getVoucherTypeByUserSuccess = (response) => {
  return {
    type: GET_VOUCHER_TYPE_BY_USER_SUCCESS,
    payload: response
  }
};

export const voucherCancel = (params) => {
  return {
    type: VOUCHER_CANCEL,
    payload: params
  }
};

export const voucherCancelSuccess = (response) => {
  return {
    type: VOUCHER_CANCEL_SUCCESS,
    payload: response
  }
};

export const voucherSaveAndNew = (params) => {
  return {
    type: VOUCHER_SAVE_AND_NEW,
    payload: params
  }
};

export const voucherSaveAndNewSuccess = (response) => {
  return {
    type: VOUCHER_SAVE_AND_NEW_SUCCESS,
    payload: response
  }
};
