// Module imports
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import TweetReplies from 'components/presentation/TweetReplies';
import Tweet from 'components/container/Tweet';
import TweetForm from 'components/container/TweetForm';
import {getTweetReplies} from 'redux/selectors';

/**
 * TweetPage component
 * @param {tweetPageProps} props - Component props
 * @return {object} - The UI DOM object
 */
const TweetPage = ({id, replies}) => (
  <div>
    <Tweet id={id} />
    <TweetForm id={id} />
    {replies && <TweetReplies replies={replies} />}
  </div>
);

/**
 * TweetPage propTypes
 */
TweetPage.propTypes = {
  id: PropTypes.string,
  replies: PropTypes.array,
};

/**
 * Maps state to TweetPage component props
 * @param {state} state
 * @param {object} ownProps
 * @params {match} ownProps.match
 * @return {tweetPageStateProps}
 */
const mapStateToProps = ({tweets}, {match}) => ({
  id: match.params.id,
  replies: getTweetReplies(match.params.id, tweets),
});

// TweetPage export
export default connect(mapStateToProps)(TweetPage);
