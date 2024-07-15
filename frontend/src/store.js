import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'; // middleware
import { composeWithDevTools } from '@redux-devtools/extension'; // devtools

const reducer = combineReducers({}); // combine reducers
const initialState = {}; // initial state

const middleware = [thunk]; // middleware

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); // create store 

export default store; // export store
