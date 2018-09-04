import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Stream from './Stream';
import loadStreamsData from './actions';
import { getVisibleStreams, getLoading } from './selectors';

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
  streams: getVisibleStreams(state),
  loading: getLoading(state),
});

const mapDispatchToProps = {
  getStreamsData: loadStreamsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamsList);
