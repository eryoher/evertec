import {
    GET_VOUCHER_ACCOUNTING,
    GET_VOUCHER_ACCOUNTING_SUCCESS,
    SEARCH_ACCOUNT,
    SEARCH_ACCOUNT_SUCCESS,
    GET_ACCOUNT_DETAIL,
    GET_ACCOUNT_DETAIL_SUCCESS,
    ACCOUNT_VALIDATE,
    ACCOUNT_VALIDATE_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    accountingItems: null,
    searchItems: null,
    accountDetail: null,
    accountsUpdate: null
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
        case ACCOUNT_VALIDATE:
            return { ...state, accountValidate: null }
        case ACCOUNT_VALIDATE_SUCCESS:
            const validateItems = action.payload;
            let accountState = {
                ...state,
                accountsUpdate: [
                    ...state.accountingItems.Items,
                ]
            }

            if (accountState.accountsUpdate) {
                accountState.accountsUpdate.forEach(prd => {
                    validateItems.forEach(params => {
                        if (prd.nitem === params.nitem) {
                            prd.nicc = params.nicc;
                            prd.cuenta = params.cuenta;
                            prd.centrocosto = params.centrocosto;
                            prd.nicodcta = params.nicodcta;
                        }
                    });
                });
            }

            return accountState;
        default:
            return state
    }
}

export default rootReducer