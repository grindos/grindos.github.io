import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { setVisibilityFilter } from '../../StreamsList/actions';
import { selectVisibilityFilter } from '../../StreamsList/selectors';

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

const mapStateToProps = createStructuredSelector({
  currentFilter: selectVisibilityFilter,
});

const mapDispatchToProps = {
  onClick: setVisibilityFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusOption);
