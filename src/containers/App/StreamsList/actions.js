import axios from 'axios';
import { LOAD_STREAMS_DATA } from '../../../constants';

const loadStreamsData = streams => {
  const data = streams.map(stream => Promise.all([
    axios.get(`https://wind-bow.glitch.me/twitch-api/channels/${stream.id}`),
    axios.get(`https://wind-bow.glitch.me/twitch-api/streams/${stream.id}`),
  ]));
  return ({
    type: LOAD_STREAMS_DATA,
    payload: Promise.all(data),
  });
};

export default loadStreamsData;
