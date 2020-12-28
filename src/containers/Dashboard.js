// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Dashboard Component
 */
class Dashboard extends Component {
  /**
   * Dashboard propTypes
   */
  static propTypes = {
    tweetIDs: PropTypes.array,
  };

  /**
   * Renders the Dashboard UI
   * @return {object} - The UI DOM object
   */
  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul>
          {this.props.tweetIDs.map((ID) => (
            <li key={ID}>
              <div>TWEET ID: {ID}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

/**
 * Maps state to Dashboard component props
 * @param {state} state - Current state
 * @return {dashboardStateProps}
 */
const mapStateToProps = ({tweets}) => ({
  tweetIDs: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp,
  ),
});

// Dashboard export
export default connect(mapStateToProps)(Dashboard);
