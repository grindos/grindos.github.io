const defaultState = {
  visibilityFilter: 'SHOW_ALL',
  streams: [],
  loading: true,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.filter,
      };
    case 'LOAD_STREAMS_DATA_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_STREAMS_DATA_FULFILLED':
      const streams = action.payload.map(stream => {
        const channelData = stream[0].data;
        const streamData = stream[1].data;
        return {
          id: channelData.name,
          name: channelData.display_name,
          status: streamData.stream ? streamData.stream.game : 'offline',
          userpic: channelData.logo,
        };
      });
      return {
        ...state,
        streams,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
