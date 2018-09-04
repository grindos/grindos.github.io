import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { SHOW_ALL } from '../constants';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), thunk)(createStore);

const persistedState = {
  visibilityFilter: SHOW_ALL,
  streams: [
    { id: 'esl_sc2' },
    { id: 'ogamingsc2' },
    { id: 'cretetion' },
    { id: 'freecodecamp' },
    { id: 'daigothebeastv' },
  ],
  loading: true,
};

const store = createStoreWithMiddleware(reducer, persistedState);

export default store;
