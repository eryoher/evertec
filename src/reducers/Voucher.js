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
    VOUCHER_CANCEL_SUCCESS
} from '../constants/ActionsTypes'

const initialState = {
    config: null,
    headSale: null,
    autodata: [],
    checkKey: null,
    checkDate: null,
    voucherHeadConfirm: null,
    headInfo: null
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_VOUCHER_HEAD:
            return { ...state, headSale: null }
        case GET_VOUCHER_HEAD_SUCCESS:
            return { ...state, headSale: action.payload }
        case GET_VOUCHER_HEAD_INFO:
            return { ...state, headInfo: null }
        case GET_VOUCHER_HEAD_INFO_SUCCESS:
            return { ...state, headInfo: action.payload }
        case GET_CONFIG_VOUCHER:
            return { ...state }
        case GET_CONFIG_VOUCHER_SUCCESS:
            const code = action.payload.cod_proceso;
            const config = (state.config) ? state.config : {};
            config[code] = action.payload;
            return { ...state, config }
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
        case VOUCHER_CANCEL_SUCCESS:
            return { ...initialState }

        default:
            return state
    }
}

export default rootReducer