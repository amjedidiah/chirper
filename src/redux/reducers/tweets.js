/**
 * Reducer function for tweets
 * @param {tweets} state - current tweets state
 * @param {action} action - Redux action
 * @return {tweets} - tweets state
 */
const tweets = (state = {}, {tweets, type}) =>
  ({RECEIVE_TWEETS: {...state, ...tweets}}[type] || state);

// Export tweets reducer
export default tweets;
