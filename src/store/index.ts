import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
//import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));