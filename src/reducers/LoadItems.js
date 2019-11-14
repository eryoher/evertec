import {
    GET_LOAD_ITEMS,
    GET_LOAD_ITEMS_SUCCESS,
    CONFIRM_LOAD_ITEMS,
    CONFIRM_LOAD_ITEMS_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    itemsCart: null,
    confirmItem: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOAD_ITEMS:
            return { ...state }
        case GET_LOAD_ITEMS_SUCCESS:
            return { ...state, itemsCart: action.payload.data }
        case CONFIRM_LOAD_ITEMS:
            return { ...state, confirmItem: null }
        case CONFIRM_LOAD_ITEMS_SUCCESS:
            return { ...state, confirmItem: action.payload }
        default:
            return state
    }
}

export default rootReducer