import { CREATE_ORDER, CREATE_ORDER_SUCCESS, GET_ORDERS, GET_ORDERS_SUCCESS, GET_PAYMENT_BY_CODE, GET_PAYMENT_BY_CODE_SUCCESS, GET_ORDER, GET_ORDER_SUCCESS, CLEAR_ORDER } from "constants/ActionsTypes"


const initialState = {
  order: null,
  listOrders: null,
  resposePayment: null
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, order: null }
    case CREATE_ORDER_SUCCESS:
      return { ...state, order: action.payload.data }
    case GET_ORDER:
      return { ...state, orderOne: null }
    case GET_ORDER_SUCCESS:
      return { ...state, orderOne: action.payload }
    case GET_ORDERS:
      return { ...state, listOrders: null }
    case GET_ORDERS_SUCCESS:
      return { ...state, listOrders: action.payload }
    case GET_PAYMENT_BY_CODE:
      return { ...state, resposePayment: null }
    case GET_PAYMENT_BY_CODE_SUCCESS:
      return { ...state, resposePayment: action.payload.data }
    case CLEAR_ORDER:
      return { ...initialState }
    default:
      return state
  }
}

export default rootReducer