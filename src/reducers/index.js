import { combineReducers } from "redux";
import orderReducer from './Orders';

const reducers = combineReducers({
  orders: orderReducer
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
