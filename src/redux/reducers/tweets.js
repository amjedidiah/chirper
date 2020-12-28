/**
 * Reducer function for tweets
 * @param {tweets} state - current tweets state
 * @param {action} action - Redux action
 * @return {tweets} - tweets state
 */
const tweets = (state = {}, action) =>
  ({RECEIVE_TWEETS: {...state, ...action.tweets}}[action.type] || state);

// Export tweets reducer
export default tweets;
