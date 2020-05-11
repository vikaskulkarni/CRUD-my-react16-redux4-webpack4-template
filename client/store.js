import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas/watchSagas";

const sagaMiddleware = createSagaMiddleware();

// Dynamically load all the defined reducers inside of ./reducers folder.
// No need to manually add a reducer everytime one is introduced
let reducerModules = require.context("./reducers/", false, /[a-zA-Z0-9]+.js$/);

const allReducers = (requireContext) => {
  return requireContext.keys().reduce(
    (reducers, reducer) => ({
      ...reducers,
      // Extract of the name of the file as the reducer name without extension
      [reducer.substr(2).slice(0, -3)]: requireContext(reducer).default,
    }),
    { form: formReducer }
  );
};

const composeEnhancer =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(
  combineReducers(allReducers(reducerModules)),
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(watchSagas);

export default store;
