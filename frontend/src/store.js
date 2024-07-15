<<<<<<< HEAD
import { legacy_createStore as createStore} from 'redux' ;
import {  combineReducers, applyMiddleware } from "redux";

import { thunk } from 'redux-thunk';
=======
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'; // middleware
>>>>>>> 92425946350477532d5424517b3f940797e94dd3
import { composeWithDevTools } from '@redux-devtools/extension'; // devtools

const reducer = combineReducers({}); // combine reducers
const initialState = {}; // initial state

const middleware = [thunk]; // middleware

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); // create store 

export default store; // export store
