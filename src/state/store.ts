import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
  allReducers,

  composeWithDevTools()
);
