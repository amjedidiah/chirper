/**
 * Reducer function for tweets
 * @param {tweets} state - current tweets state
 * @param {action} action - Redux action
 * @return {tweets} - tweets state
 */
const tweets = (state = {}, {authedUser, hasLiked, id, tweets, type}) => {
  const likes = state[id] ? state[id].likes : [];

  return (
    {
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
