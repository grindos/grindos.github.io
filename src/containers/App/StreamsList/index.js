import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Stream from './Stream';
import loadStreamsData from './actions';

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
    const { streams, getStreamsData } = this.props;
    getStreamsData(streams);
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
  getStreamsData: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  streams: getVisibleStreams(state.streams, state.visibilityFilter),
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getStreamsData: streams => {
    dispatch(loadStreamsData(streams));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamsList);
