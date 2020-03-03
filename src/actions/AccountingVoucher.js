import {
    GET_VOUCHER_TAXES,
    GET_VOUCHER_TAXES_SUCCESS
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
