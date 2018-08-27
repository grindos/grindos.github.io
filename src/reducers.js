import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER, LOAD_USER_DATA_FULFILLED, LOAD_STREAM_DATA_FULFILLED, LOAD_READY } from './constants';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const defaultStreamsState = [
  { id: 'esl_sc2' },
  { id: 'ogamingsc2' },
  { id: 'cretetion' },
  { id: 'freecodecamp' },
];

const streams = (state = defaultStreamsState, action) => {
  let id;
  let data;
  switch (action.type) {
    case LOAD_USER_DATA_FULFILLED:
      data = action.payload.data;
      id = action.meta.id;
      return state.map(user => (user.id === id
        ? Object.assign({}, user, { name: data.display_name, userpic: data.logo })
        : user));
    case LOAD_STREAM_DATA_FULFILLED:
      id = action.meta.id;
      data = action.payload.data;
      const status = data.stream ? data.stream.game : 'offline';
      return state.map(user => (user.id === id
        ? Object.assign({}, user, { status })
        : user));
    default:
      return state;
  }
};

const loading = (state = true, action) => {
  switch (action.type) {
    case LOAD_READY:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  visibilityFilter,
  streams,
  loading,
});
