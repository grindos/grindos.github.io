import axios from 'axios';

export const loadUserData = id => ({
  type: 'LOAD_USER_DATA',
  payload: axios.get(`https://wind-bow.glitch.me/twitch-api/users/${id}`),
  meta: {
    id,
  },
});

export const loadStreamData = id => ({
  type: 'LOAD_STREAM_DATA',
  payload: axios.get(`https://wind-bow.glitch.me/twitch-api/streams/${id}`),
  meta: {
    id,
  },
});

export const loadReady = () => ({
  type: 'LOAD_READY',
});
