// Type imports
import {RECEIVE_TWEETS} from 'redux/actions/types';

/**
 * Action creator for received tweets
 * @param {tweets} tweets - Tweets received from fetch
 * @return {action} - Action to dispatch
 */
export const receiveTweets = (tweets) => ({type: RECEIVE_TWEETS, tweets});
