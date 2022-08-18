import { createStore, applyMiddleware } from 'redux';
import { compeseWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk'



const store = createStore(rootReducer, compeseWithDevTools(applyMiddleware(thunk)))

export default store;
