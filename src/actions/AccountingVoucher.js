import {
    GET_VOUCHER_TAXES,
    GET_VOUCHER_TAXES_SUCCESS,
    TAXES_VALIDATE_ROW,
    TAXES_VALIDATE_ROW_SUCCESS,
    TAXES_CONFIRM,
    TAXES_CONFIRM_SUCCESS
} from '../constants/ActionsTypes';


export const getVoucherTaxes = (params) => {
    return {
        type: GET_VOUCHER_TAXES,
        payload: params
    }
};

export const getVoucherTaxesSuccess = (response) => {
    return {
        type: GET_VOUCHER_TAXES_SUCCESS,
        payload: response
    }
};

export const taxesValidateRow = (params) => {
    return {
        type: TAXES_VALIDATE_ROW,
        payload: params
    }
};

export const taxesValidateRowSuccess = (response) => {
    return {
        type: TAXES_VALIDATE_ROW_SUCCESS,
        payload: response
    }
};


export const taxesConfirm = (params) => {
    return {
        type: TAXES_CONFIRM,
        payload: params
    }
};

export const taxesConfirmSuccess = (response) => {
    return {
        type: TAXES_CONFIRM_SUCCESS,
        payload: response
    }
};