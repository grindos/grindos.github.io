import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setVisibilityFilter } from '../../actions';

const StatusOption = ({ onClick, children, filter, currentFilter }) => (
  <button
    type="button"
    onClick={e => {
      e.preventDefault();
      onClick(filter);
    }}
    className={
      filter === currentFilter ? 'chosen-filter' : ''
    }
  >
    {children}
  </button>
);
StatusOption.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  filter: PropTypes.string,
  currentFilter: PropTypes.string,
};

const mapStateToProps = state => ({
  currentFilter: state.streams.visibilityFilter,
});

const mapDispatchToProps = {
  onClick: setVisibilityFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusOption);
