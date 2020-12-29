// Util imports
import {formatTweet} from 'utils/helpers';

/**
 * Get Laoding status
 * @param {id} authedUser - authedUser from state
 * @return {boolean}
 */
export const getLoading = (authedUser) => authedUser === null;

/**
 * Get tweet IDs
 * @param {tweets} tweets - tweets from state
 * @return {id[]} - IDs of tweet
 */
export const getTweetIDs = (tweets) =>
  Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp);

/**
 * Get tweet
 * @param {id} id - ID of a particular tweet
 * @param {tweets} tweets - tweets from state
 * @return {tweet} - tweet
 */
export const getTweet = (id, tweets) => tweets[id];

/**
 * Get parent tweet
 * @param {id} id - ID of a particular tweet
 * @param {tweets} tweets - tweets from state
 * @return {tweet} - parent tweet
 */
export const getParentTweet = (id, tweets) => {
  const tweet = getTweet(id, tweets);
  return tweet && tweets[tweet.replyingTo];
};

/**
 * Formats single tweet from state
 * @param {id} authedUser - authedUser from state
 * @param {id} id - ID of a particular tweet
 * @param {tweets} tweets - tweets from state
 * @param {users} users - users from state
 * @return {tweet} - formatted tweet
 */
export const getFormattedTweet = (authedUser, id, tweets, users) => {
  const tweet = getTweet(id, tweets);

  return (
    tweet &&
    formatTweet(
        tweet,
        users[tweet.author],
        authedUser,
        getParentTweet(id, tweets),
    )
  );
};

/**
 * Gets tweet replies from state
 * @param {string} id - ID of a particular tweet
 * @param {tweets} tweets - tweets from state
 * @return {id[]} - IDs of tweet replies
 */
export const getTweetReplies = (id, tweets) =>
  tweets[id] &&
  tweets[id].replies.sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp,
  );
