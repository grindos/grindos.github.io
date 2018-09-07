import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_ONLINE, SHOW_OFFLINE } from '../../../constants';

const selectStreams = state => state.streams.streams;
export const selectVisibilityFilter = state => state.streams.visibilityFilter;

export const selectVisibleStreams = createSelector(
  [selectVisibilityFilter, selectStreams],
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

export const selectLoading = state => state.streams.loading;
