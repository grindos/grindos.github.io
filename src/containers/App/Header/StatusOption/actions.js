import { SET_VISIBILITY_FILTER } from '../../../../constants';

const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export default setVisibilityFilter;
