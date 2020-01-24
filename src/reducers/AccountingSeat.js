import {
    GET_VOUCHER_ACCOUNTING,
    GET_VOUCHER_ACCOUNTING_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    accountingItems: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VOUCHER_ACCOUNTING:
            return { ...state, accountingItems: null }
        case GET_VOUCHER_ACCOUNTING_SUCCESS:
            console.log(action.payload)
            return { ...state, accountingItems: action.payload }
        default:
            return state
    }
}

export default rootReducer