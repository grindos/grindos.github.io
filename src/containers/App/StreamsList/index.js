import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Stream from './Stream';
import { loadUserData, loadStreamData, loadReady } from './actions';

const getVisibleStreams = (streams, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return streams;
    case 'SHOW_ONLINE':
      return streams.filter(stream => stream.status !== 'offline');
    case 'SHOW_OFFLINE':
      return streams.filter(stream => stream.status === 'offline');
    default:
      return [];
  }
};

class StreamsList extends Component {
  componentDidMount() {
    const { streams, getUserData, getStreamData, setReady } = this.props;
    streams.forEach(stream => {
      getUserData(stream.id);
      getStreamData(stream.id);
    });
    setReady();
  }

  render() {
    const { loading, streams } = this.props;
    if (loading) {
      return (
        <div className="loading">
          Loading...
        </div>
      );
    }
    return (
      <div className="StreamList">
        {streams.map(stream => (
          <Stream
            key={stream.id}
            name={stream.name}
            status={stream.status}
            userpic={stream.userpic}
            id={stream.id}
          />
        ))}
      </div>
    );
  }
}
StreamsList.propTypes = {
  streams: PropTypes.array,
  getUserData: PropTypes.func,
  getStreamData: PropTypes.func,
  setReady: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  streams: getVisibleStreams(state.streams, state.visibilityFilter),
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getUserData: id => {
    dispatch(loadUserData(id));
  },
  getStreamData: id => {
    dispatch(loadStreamData(id));
  },
  setReady: () => {
    dispatch(loadReady());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamsList);
