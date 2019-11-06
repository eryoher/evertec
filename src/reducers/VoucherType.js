import { GET_VOUCHER_TYPE, GET_VOUCHER_TYPE_SUCCESS, GET_VOUCHER_TYPE_BY_USER, GET_VOUCHER_TYPE_BY_USER_SUCCESS } from 'constants/ActionsTypes'

const initialState = {
  voucherType: null,
  userVoucherType: (typeof window !== 'undefined') ? ((window.localStorage.getItem('userVoucherType')) ? JSON.parse(window.localStorage.getItem('userVoucherType')) : undefined) : undefined,
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VOUCHER_TYPE:
      return { ...state, voucherType: null }
    case GET_VOUCHER_TYPE_SUCCESS:
      return { ...state, voucherType: action.payload }
    case GET_VOUCHER_TYPE_BY_USER:
      return { ...state, userVoucherType: [] }
    case GET_VOUCHER_TYPE_BY_USER_SUCCESS:
      return { ...state, userVoucherType: action.payload }
    default:
      return state
  }
}

export default rootReducer