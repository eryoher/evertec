import {
    GET_CLIENT_HEADBOARD,
    GET_CLIENT_HEADBOARD_SUCCESS,
    GET_GENERATE_ITEMS,
    GET_GENERATE_ITEMS_SUCCESS,
    GET_GENERATE_SALES_AFFECTED,
    GET_GENERATE_SALES_AFFECTED_SUCCESS,
    FINISH_GENERATE,
    FINISH_GENERATE_SUCCESS,
    PRINT_GENERATE,
    PRINT_GENERATE_SUCCESS,
    CHANGE_TABLE_ITEMS,
    CHANGE_TABLE_ITEMS_SUCCESS,
    CHANGE_TABLE_AFFECT,
    CHANGE_TABLE_AFFECT_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    clientHeadboard: null,
    generateItems: [],
    generateSalesAffected: [],
    generateVoucher: null,
    printgenerate: null,
    generateItemsTable: null,
    affecItemsTable: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CLIENT_HEADBOARD:
            return { ...state, clientHeadboard: null, generateItemsTable: null }
        case GET_CLIENT_HEADBOARD_SUCCESS:
            return { ...state, clientHeadboard: action.payload }
        case GET_GENERATE_ITEMS:
            return { ...state, generateItems: [] }
        case GET_GENERATE_ITEMS_SUCCESS:
            return { ...state, generateItems: action.payload.data }
        case GET_GENERATE_SALES_AFFECTED:
            return { ...state, generateSalesAffected: [] }
        case GET_GENERATE_SALES_AFFECTED_SUCCESS:
            return { ...state, generateSalesAffected: action.payload }
        case FINISH_GENERATE:
            return { ...state, generateVoucher: null }
        case FINISH_GENERATE_SUCCESS:
            return { ...state, generateVoucher: action.payload.data }
        case PRINT_GENERATE:
            return { ...state, printgenerate: null }
        case PRINT_GENERATE_SUCCESS:
            return { ...state, printgenerate: action.payload.data }
        case CHANGE_TABLE_ITEMS:
            return { ...state }
        case CHANGE_TABLE_ITEMS_SUCCESS:
            return { ...state, generateItemsTable: action.payload }
        case CHANGE_TABLE_AFFECT:
            return { ...state }
        case CHANGE_TABLE_AFFECT_SUCCESS:
            return { ...state, affecItemsTable: action.payload }
        default:
            return state
    }
}

export default rootReducer