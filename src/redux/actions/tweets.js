// Module imports
import {hideLoading, showLoading} from 'react-redux-loading';

// Type imports
import {ADD_TWEET, RECEIVE_TWEETS, TOGGLE_TWEET} from 'redux/actions/types';

// Util imports
import {saveLikeToggle, saveTweet} from 'utils/api';

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
const toggleTweet = ({id, authedUser, hasLiked}) => ({
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

/**
 * Action creator to add a tweet
 * @param {tweet} tweet
 * @return {action}
 */
const addTweet = (tweet) => ({type: ADD_TWEET, tweet});

/**
 * Handles adding a tweet
 * @param {id} authedUser
 * @param {string} text
 * @param {id} [replyingTo]
 * @return {promise}
 */
export const handleAddTweet = (authedUser, text, replyingTo) => (dispatch) => {
  dispatch(showLoading());

  return saveTweet({text, author: authedUser, replyingTo})
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleAddTweet: ', e);
        alert('There was an error adding the tweet. Try again');
      });
};
