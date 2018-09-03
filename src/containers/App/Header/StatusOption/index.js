import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import setVisibilityFilter from './actions';

const StatusOption = ({ onClick, children }) => (
  <button
    type="button"
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </button>
);
StatusOption.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(null, mapDispatchToProps)(StatusOption);
