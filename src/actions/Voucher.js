import {
    GET_CONFIG_VOUCHER,
    GET_CONFIG_VOUCHER_SUCCESS,
    GET_VOUCHER_HEAD,
    GET_VOUCHER_HEAD_SUCCESS,
    VOUCHER_HEAD_AUTO,
    VOUCHER_HEAD_AUTO_SUCCESS,
    VOUCHER_HEAD_VALIDATE_KEY,
    VOUCHER_HEAD_VALIDATE_KEY_SUCCESS,
    VOUCHER_HEAD_CHECK_DATE,
    VOUCHER_HEAD_CHECK_DATE_SUCCESS,
    VOUCHER_HEAD_CONFIRM,
    VOUCHER_HEAD_CONFIRM_SUCCESS,
    GET_VOUCHER_HEAD_INFO,
    GET_VOUCHER_HEAD_INFO_SUCCESS,

} from '../constants/ActionsTypes';


export const getConfigVoucher = (params) => {
    return {
        type: GET_CONFIG_VOUCHER,
        payload: params
    }
};

export const getConfigVoucherSuccess = (response) => {
    return {
        type: GET_CONFIG_VOUCHER_SUCCESS,
        payload: response
    }
};


export const getVoucherHead = (params) => {
    return {
        type: GET_VOUCHER_HEAD,
        payload: params
    }
};

export const getVoucherHeadSuccess = (response) => {
    return {
        type: GET_VOUCHER_HEAD_SUCCESS,
        payload: response
    }
};

export const getVoucherHeadInfo = (params) => {
    return {
        type: GET_VOUCHER_HEAD_INFO,
        payload: params
    }
};

export const getVoucherHeadInfoSuccess = (response) => {
    return {
        type: GET_VOUCHER_HEAD_INFO_SUCCESS,
        payload: response
    }
};


export const voucherHeadAuto = (params) => {
    return {
        type: VOUCHER_HEAD_AUTO,
        payload: params
    }
};

export const voucherHeadAutoSuccess = (response) => {
    return {
        type: VOUCHER_HEAD_AUTO_SUCCESS,
        payload: response
    }
};


export const voucherHeadValidatekey = (params) => {
    return {
        type: VOUCHER_HEAD_VALIDATE_KEY,
        payload: params
    }
};

export const voucherHeadValidatekeySuccess = (response) => {
    return {
        type: VOUCHER_HEAD_VALIDATE_KEY_SUCCESS,
        payload: response
    }
};

export const voucherHeadCheckDate = (params) => {
    return {
        type: VOUCHER_HEAD_CHECK_DATE,
        payload: params
    }
};

export const voucherHeadCheckDateSuccess = (response) => {
    return {
        type: VOUCHER_HEAD_CHECK_DATE_SUCCESS,
        payload: response
    }
};


export const voucherHeadConfirm = (params) => {
    return {
        type: VOUCHER_HEAD_CONFIRM,
        payload: params
    }
};

export const voucherHeadConfirmSuccess = (response) => {
    return {
        type: VOUCHER_HEAD_CONFIRM_SUCCESS,
        payload: response
    }
};

