import {
  GET_CLIENT,
  GET_CLIENT_SUCCESS,
  SEARCH_CLIENTS,
  SEARCH_CLIENTS_SUCCESS,
  CONFIRMATION_CLIENT,
  CONFIRMATION_CLIENT_SUCCESS,
  VOUCHER_CANCEL_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
  client: null,
  search: null,
  confirmation: null
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENT:
      return { ...state, client: null }
    case GET_CLIENT_SUCCESS:
      return { ...state, client: action.payload }
    case SEARCH_CLIENTS:
      return { ...state, search: null }
    case SEARCH_CLIENTS_SUCCESS:
      return { ...state, search: action.payload }
    case CONFIRMATION_CLIENT:
      return { ...state, confirmation: null }
    case CONFIRMATION_CLIENT_SUCCESS:
      return { ...state, confirmation: action.payload }
    case VOUCHER_CANCEL_SUCCESS:
      return { ...initialState }
    default:
      return state
  }
}

export default rootReducer