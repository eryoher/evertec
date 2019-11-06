import {
  SIGNIN_USER_SUCCESS,
  GET_USER_SUCCESS,
  GET_PERMISSIONS_SUCCESS,
  SIGNOUT_USER_SUCCESS,
} from 'constants/ActionsTypes'

const initialState = {
  authUser: (typeof window !== 'undefined') ? ((window.localStorage.getItem('user')) ? JSON.parse(window.localStorage.getItem('user')) : undefined) : undefined,
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER_SUCCESS:
      return { ...state, authUser: action.payload }
    case SIGNOUT_USER_SUCCESS:
      return { state: undefined }
    case GET_USER_SUCCESS:
      return { ...state, authUser: action.payload }
    case GET_PERMISSIONS_SUCCESS:
      return { ...state, permissions: action.payload }
    default:
      return state
  }
}

export default rootReducer