import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;
