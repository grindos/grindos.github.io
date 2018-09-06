import axios from 'axios';
import { SET_VISIBILITY_FILTER, LOAD_STREAMS_DATA } from '../../constants';

export const loadStreamsData = streams => {
  const data = streams.map(stream => Promise.all([
    axios.get(`https://wind-bow.glitch.me/twitch-api/channels/${stream.id}`),
    axios.get(`https://wind-bow.glitch.me/twitch-api/streams/${stream.id}`),
  ]));
  return ({
    type: LOAD_STREAMS_DATA,
    payload: Promise.all(data),
  });
};

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
