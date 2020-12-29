// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import Tweet from 'components/container/Tweet';

/**
 * TweetReplies Component
 * @param {tweetRepliesProps} props - Component props
 * @return {object} - The UI DOM object
 */
const TweetReplies = ({replies}) => (
  <ul>
    {replies.map((replyID) => (
      <li key={replyID}>
        <Tweet id={replyID} />
      </li>
    ))}
  </ul>
);

/**
 * TweetReplies propTypes
 */
TweetReplies.propTypes = {
  replies: PropTypes.array,
};

// TweetReplies export
export default TweetReplies;
