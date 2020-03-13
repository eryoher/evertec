import {
    GET_LOAD_ITEMS,
    GET_LOAD_ITEMS_SUCCESS,
    CONFIRM_LOAD_ITEMS,
    CONFIRM_LOAD_ITEMS_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    itemsCart: null,
    confirmItem: null,
    parameterConfirm: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOAD_ITEMS:
            return { ...state }
        case GET_LOAD_ITEMS_SUCCESS:
            return { ...state, itemsCart: action.payload.data }
        case CONFIRM_LOAD_ITEMS:
            return { ...state, confirmItem: null, parameterConfirm: action.payload }
        case CONFIRM_LOAD_ITEMS_SUCCESS:
            const itemsCart = {
                total_importe: action.payload.total_importe,
                total_item: action.payload.total_item,
                total_cant: action.payload.total_cant
            }
            return { ...state, confirmItem: action.payload, itemsCart }
        default:
            return state
    }
}

export default rootReducer