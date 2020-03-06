import {
    GET_VOUCHER_TAXES,
    GET_VOUCHER_TAXES_SUCCESS,
    TAXES_VALIDATE_ROW,
    TAXES_VALIDATE_ROW_SUCCESS,
    TAXES_CONFIRM,
    TAXES_CONFIRM_SUCCESS
} from '../constants/ActionsTypes'

const initialState = {
    search: null,
    taxesValidate: null,
    taxesConfirm: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VOUCHER_TAXES:
            return { ...state, search: null }
        case GET_VOUCHER_TAXES_SUCCESS:
            return { ...state, search: action.payload }
        case TAXES_VALIDATE_ROW:
            return { ...state, taxesValidate: null }
        case TAXES_VALIDATE_ROW_SUCCESS:
            return { ...state, taxesValidate: action.payload }
        case TAXES_CONFIRM:
            return { ...state, taxesConfirm: null }
        case TAXES_CONFIRM_SUCCESS:
            return { ...state, taxesConfirm: action.payload }
        default:
            return state
    }
}

export default rootReducer