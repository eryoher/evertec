import {
    GET_VOUCHER_ACCOUNTING,
    GET_VOUCHER_ACCOUNTING_SUCCESS

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