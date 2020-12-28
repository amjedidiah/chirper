// Type imports
import {RECEIVE_TWEETS, TOGGLE_TWEET} from 'redux/actions/types';

// Util imports
import {saveLikeToggle} from 'utils/api';

/**
 * Action creator for received tweets
 * @param {tweets} tweets - Tweets received from fetch
 * @return {action} - Action to dispatch
 */
export const receiveTweets = (tweets) => ({type: RECEIVE_TWEETS, tweets});

/**
 * Action creator to like tweet
 * @param {info} info
 * @return {action} - Action to dispatch
 */
export const toggleTweet = ({id, authedUser, hasLiked}) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked,
});

/**
 * Handles tweek like
 * @param {info} info - The tweet to like
 * @return {promise}
 */
export const handleToggleTweet = (info) => (dispatch) => {
  dispatch(toggleTweet(info));

  return saveLikeToggle(info).catch((e) => {
    dispatch(toggleTweet(info));
    console.warn('Error in handleToggleTweet: ', e);
    alert('There was an error liking the tweet. Try again');
  });
};
