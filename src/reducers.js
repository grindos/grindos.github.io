import { SET_VISIBILITY_FILTER, LOAD_USER_DATA_FULFILLED, LOAD_STREAM_DATA_FULFILLED, LOAD_READY } from './constants';

const defaultState = {
  visibilityFilter: 'SHOW_ALL',
  streams: [],
  loading: true,
};

const reducer = (state = defaultState, action) => {
  let id;
  let data;
  let streams;
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    case LOAD_READY:
      return Object.assign({}, state, {
        loading: false,
      });
    case LOAD_USER_DATA_FULFILLED:
      data = action.payload.data;
      id = action.meta.id;
      streams = state.streams.map(user => (user.id === id
        ? Object.assign({}, user, { name: data.display_name, userpic: data.logo })
        : user));
      return Object.assign({}, state, { streams });
    case LOAD_STREAM_DATA_FULFILLED:
      id = action.meta.id;
      data = action.payload.data;
      const status = data.stream ? data.stream.game : 'offline';
      streams = state.streams.map(user => (user.id === id
        ? Object.assign({}, user, { status })
        : user));
      return Object.assign({}, state, { streams });
    default:
      return state;
  }
};

export default reducer;
