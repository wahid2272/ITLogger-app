import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const makeStore = () => {
  const middlewares = {thunk};
  let composeEnhancers = compose;

  const initialState = {}
  }


if (process.env.NODE_ENV === 'development') {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
      })
  }

  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}




export default store;
