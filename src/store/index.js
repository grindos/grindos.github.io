import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

const persistedState = {
  visibilityFilter: 'SHOW_ALL',
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
