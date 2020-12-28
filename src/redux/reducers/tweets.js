/**
 * Reducer function for tweets
 * @param {tweets} state - current tweets state
 * @param {action} action - Redux action
 * @return {tweets} - tweets state
 */
const tweets = (
    state = {},
    {authedUser, hasLiked, id, tweet, tweets, type},
) => {
  /**
   * @const
   * @type {id[]}
   */
  const likes = state[id] ? state[id].likes : [];

  /**
   * @const
   * @type {string}
   */
  const tweetID = tweet ? tweet.id : '';

  /**
   * @const
   * @type {object}
   */
  let replyingTo = {};

  if (tweetID && tweet.replyingTo) {
    replyingTo = {
      [tweet.replyingTo]: {
        ...state[tweet.replyingTo],
        replies: [...state[tweet.replyingTo].replies, tweetID],
      },
    };
  }

  return (
    {
      ADD_TWEET: {...state, [tweetID]: tweet, ...replyingTo},
      RECEIVE_TWEETS: {...state, ...tweets},
      TOGGLE_TWEET: {
        ...state,
        [id]: {
          ...state[id],
          likes: hasLiked ?
            likes.filter((uid) => uid !== authedUser) :
            [...likes, authedUser],
        },
      },
    }[type] || state
  );
};

// Export tweets reducer
export default tweets;
