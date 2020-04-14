import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import rootSaga from '../sagas'

//import configureAxios from 'lib/AxiosInterceptors'

import { Constants } from 'constants/index';

const sagaMiddleware = createSagaMiddleware()

let store;

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== Constants.ENVS.PROD) {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export function configureStore() {
  store = createStore(
    reducers,
    bindMiddleware([sagaMiddleware])
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()

  //configureAxios(store);

  return store
}

export function getStore() {
  return store;
}

export default configureStore;