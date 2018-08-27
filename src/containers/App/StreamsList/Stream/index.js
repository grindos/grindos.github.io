import React from 'react';
import PropTypes from 'prop-types';

const Stream = ({ name, status, userpic, id }) => (
  <div className="Stream">
    <div className="StreamUserpic">
      <img
        src={userpic}
        alt={`${name} userpic`}
      />
    </div>
    <div className="StreamUsername">
      {name}
    </div>
    <div className="StreamStatus">
      <a href={`https://twitch.tv/${id}`}>{status}</a>
    </div>
  </div>
);
Stream.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  userpic: PropTypes.string,
  id: PropTypes.string,
};

export default Stream;
