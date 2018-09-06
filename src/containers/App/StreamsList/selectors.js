import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_ONLINE, SHOW_OFFLINE } from '../../../constants';

const getStreams = state => state.streams.streams;
const getVisibilityFilter = state => state.streams.visibilityFilter;

export const getVisibleStreams = createSelector(
  [getVisibilityFilter, getStreams],
  (visibilityFilter, streams) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return streams;
      case SHOW_ONLINE:
        return streams.filter(stream => stream.status !== 'offline');
      case SHOW_OFFLINE:
        return streams.filter(stream => stream.status === 'offline');
      default:
        return [];
    }
  },
);

export const getLoading = state => state.streams.loading;
