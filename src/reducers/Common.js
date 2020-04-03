import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  SHOW_MESSAGE,
  CLEAR_MESSAGE,
} from 'constants/ActionsTypes'

const initialState = {
  message: null,
  error: null,
  showLoader: false
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, showLoader: true }
    case HIDE_LOADER:
      return { ...state, showLoader: false }
    case SHOW_ERROR:
      return { ...state, error: action.payload }
    case CLEAR_ERROR:
      return { ...state, error: null }
    case SHOW_MESSAGE:
      return { ...state, message: action.payload }
    case CLEAR_MESSAGE:
      return { ...state, message: null }
    default:
      return state
  }
}

export default rootReducer