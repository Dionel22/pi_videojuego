import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"

const composeEnHacer = (typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;

const store = createStore(
    reducer,
    composeEnHacer(applyMiddleware(thunk)),)

export default store;