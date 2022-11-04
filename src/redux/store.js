import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const enhancer = compose(applyMiddleware(thunk));

const store = legacy_createStore(
  rootReducer,
  enhancer
);  

export default store
