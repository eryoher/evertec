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
    VOUCHER_HEAD_CONFIRM_SUCCESS
} from '../constants/ActionsTypes'

const initialState = {
    config: null,
    headSale: null,
    autodata: [],
    checkKey: null,
    checkDate: null,
    voucherHeadConfirm: null
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_VOUCHER_HEAD:
            return { ...state, headSale: null }
        case GET_VOUCHER_HEAD_SUCCESS:
            return { ...state, headSale: action.payload }
        case GET_CONFIG_VOUCHER:
            return { ...state, config: null }
        case GET_CONFIG_VOUCHER_SUCCESS:
            return { ...state, config: action.payload }
        case VOUCHER_HEAD_AUTO:
            return { ...state, autodata: [] }
        case VOUCHER_HEAD_AUTO_SUCCESS:
            return { ...state, autodata: action.payload }
        case VOUCHER_HEAD_VALIDATE_KEY:
            return { ...state, checkKey: null }
        case VOUCHER_HEAD_VALIDATE_KEY_SUCCESS:
            return { ...state, checkKey: action.payload }
        case VOUCHER_HEAD_CHECK_DATE:
            return { ...state, checkDate: null }
        case VOUCHER_HEAD_CHECK_DATE_SUCCESS:
            return { ...state, checkDate: action.payload }
        case VOUCHER_HEAD_CONFIRM:
            return { ...state, voucherHeadConfirm: null }
        case VOUCHER_HEAD_CONFIRM_SUCCESS:
            return { ...state, voucherHeadConfirm: action.payload }

        default:
            return state
    }
}

export default rootReducer