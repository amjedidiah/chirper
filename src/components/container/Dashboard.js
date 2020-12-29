// Module imports
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import Tweet from 'components/container/Tweet';

// Selector imports
import {getTweetIDs} from 'redux/selectors';

/**
 * Dashboard Component
 * @param {dashboardProps} props - Component props
 * @return {object} - The UI DOM object
 */
const Dashboard = ({tweetIDs}) => (
  <div>
    <h3 className="center">Your Timeline</h3>
    <ul>
      {tweetIDs.map((ID) => (
        <li key={ID}>
          <Tweet id={ID} />
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Dashboard propTypes
 */
Dashboard.propTypes = {
  tweetIDs: PropTypes.array,
};

/**
 * Maps state to Dashboard component props
 * @param {state} state - Current state
 * @return {dashboardStateProps}
 */
const mapStateToProps = ({tweets}) => ({
  tweetIDs: getTweetIDs(tweets),
});

// Dashboard export
export default connect(mapStateToProps)(Dashboard);
