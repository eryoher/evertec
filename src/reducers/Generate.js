import {
    GET_CLIENT_HEADBOARD,
    GET_CLIENT_HEADBOARD_SUCCESS,
    GET_GENERATE_ITEMS,
    GET_GENERATE_ITEMS_SUCCESS,
    GET_GENERATE_SALES_AFFECTED,
    GET_GENERATE_SALES_AFFECTED_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    clientHeadboard: null,
    generateItems: [],
    generateSalesAffected: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CLIENT_HEADBOARD:
            return { ...state, clientHeadboard: null }
        case GET_CLIENT_HEADBOARD_SUCCESS:
            return { ...state, clientHeadboard: action.payload }
        case GET_GENERATE_ITEMS:
            return { ...state, generateItems: [] }
        case GET_GENERATE_ITEMS_SUCCESS:
            return { ...state, generateItems: action.payload }
        case GET_GENERATE_SALES_AFFECTED:
            return { ...state, generateSalesAffected: [] }
        case GET_GENERATE_SALES_AFFECTED_SUCCESS:
            return { ...state, generateSalesAffected: action.payload }
        default:
            return state
    }
}

export default rootReducer