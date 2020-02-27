import {
    GET_VOUCHER_ACCOUNTING,
    GET_VOUCHER_ACCOUNTING_SUCCESS,
    SEARCH_ACCOUNT,
    SEARCH_ACCOUNT_SUCCESS,
    GET_ACCOUNT_DETAIL,
    GET_ACCOUNT_DETAIL_SUCCESS,
    ACCOUNT_VALIDATE,
    ACCOUNT_VALIDATE_SUCCESS,
    ACCOUNT_CONFIRM,
    ACCOUNT_CONFIRM_SUCCESS
} from '../constants/ActionsTypes';


export const getVoucherAccounting = (params) => {
    return {
        type: GET_VOUCHER_ACCOUNTING,
        payload: params
    }
};

export const getVoucherAccountingSuccess = (response) => {
    return {
        type: GET_VOUCHER_ACCOUNTING_SUCCESS,
        payload: response
    }
};

export const searchAccount = (params) => {
    return {
        type: SEARCH_ACCOUNT,
        payload: params
    }
};

export const searchAccountSuccess = (response) => {
    return {
        type: SEARCH_ACCOUNT_SUCCESS,
        payload: response
    }
};

export const getAccountDetail = (params) => {
    return {
        type: GET_ACCOUNT_DETAIL,
        payload: params
    }
};

export const getAccountDetailSuccess = (response) => {
    return {
        type: GET_ACCOUNT_DETAIL_SUCCESS,
        payload: response
    }
};

export const accountValidate = (params) => {
    return {
        type: ACCOUNT_VALIDATE,
        payload: params
    }
};

export const accountValidateSuccess = (response) => {
    return {
        type: ACCOUNT_VALIDATE_SUCCESS,
        payload: response
    }
};



export const accountConfirm = (params) => {
    return {
        type: ACCOUNT_CONFIRM,
        payload: params
    }
};

export const accountConfirmSuccess = (response) => {
    return {
        type: ACCOUNT_CONFIRM_SUCCESS,
        payload: response
    }
};