import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import rootReducer from "./rootReducer";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
