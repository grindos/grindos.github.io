import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setVisibilityFilter } from '../../actions';

const StatusOption = ({ onClick, children, filter }) => (
  <button
    type="button"
    onClick={e => {
      e.preventDefault();
      onClick(filter);
    }}
  >
    {children}
  </button>
);
StatusOption.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  filter: PropTypes.string,
};

const mapDispatchToProps = {
  onClick: setVisibilityFilter,
};

export default connect(null, mapDispatchToProps)(StatusOption);
