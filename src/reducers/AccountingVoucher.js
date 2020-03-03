import {
    GET_VOUCHER_TAXES,
    GET_VOUCHER_TAXES_SUCCESS
} from '../constants/ActionsTypes'

const initialState = {
    search: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VOUCHER_TAXES:
            return { ...state, search: null }
        case GET_VOUCHER_TAXES_SUCCESS:
            return { ...state, search: action.payload }
        default:
            return state
    }
}

export default rootReducer