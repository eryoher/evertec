import {
    GET_VOUCHER_ACCOUNTING,
    GET_VOUCHER_ACCOUNTING_SUCCESS,
    SEARCH_ACCOUNT,
    SEARCH_ACCOUNT_SUCCESS,
    GET_ACCOUNT_DETAIL,
    GET_ACCOUNT_DETAIL_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    accountingItems: null,
    searchItems: null,
    accountDetail: null,
    productsUpdate: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VOUCHER_ACCOUNTING:
            return { ...state, accountingItems: null }
        case GET_VOUCHER_ACCOUNTING_SUCCESS:
            return { ...state, accountingItems: action.payload }
        case SEARCH_ACCOUNT:
            return { ...state, searchItems: null }
        case SEARCH_ACCOUNT_SUCCESS:
            return { ...state, searchItems: action.payload }
        case GET_ACCOUNT_DETAIL:
            return { ...state, accountDetail: null }
        case GET_ACCOUNT_DETAIL_SUCCESS:
            return { ...state, accountDetail: action.payload }

        default:
            return state
    }
}

export default rootReducer