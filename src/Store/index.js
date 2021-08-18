import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import ListQuestion from '../Store/reducers/ListQuestion'
import Answers from '../Store/reducers/Answer'
import thunk from "redux-thunk";

// set up middle ware va readux dev tool
const rootReducer = combineReducers({ListQuestion, Answers})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))