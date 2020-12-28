/**
 * Definition for action
 * @typedef {Object} action
 * @property {string} type - Action type
 */

/**
 * Definition for action creator
 * @typedef {function} actionCreator
 * @return {action} action
 */

/**
 * Definition for id
 * @typedef {string} id
 */

/**
 * Definition for state
 * @typedef {object} state
 * @property {string} authedUser - The autheduser ID
 * @property {tweets} tweets - All tweets
 * @property {users} users - All users
 */

/**
 * Definition for store
 * @typedef {object} store
 * @property {function} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {function} subscribe - Adds functions to execute on state change
 */

/**
 * Definition for tweet
 * @typedef {Object} tweet
 * @property {string} id - the id of this tweet
 * @property {string} avatar - author avatar
 * @property {boolean} hasLiked - if tweet has been liked
 * @property {number} likes - number of likes
 * @property {string} name - author name
 * @property {string} parent - tweet parent id
 * @property {number} replies - number of replies
 * @property {string} text - tweet text
 * @property {number} timestanp - tweet timestamp
 */

/**
 * Definition for tweets
 * @typedef {Object} tweets
 * @property {tweet} tweetID - the id of a particuular tweet
 */

/**
 * Definition for user
 * @typedef {Object} user
 * @property {string} id - the id of this user
 */

/**
 * Definition for users
 * @typedef {Object} users
 * @property {user} userID - the id of a particular user
 */

/**
 * MapStateToProps Definitions
 */
/**
 * App State Props
 * @typedef {object} appStateProps
 * @property {boolean} loading - if authedUser has not been fetched
 */
/**
 * Dashboard State Props
 * @typedef {object} dashboardStateProps
 * @property {id[]} tweetIDs - Array of tweetIDs
 */
/**
 * Tweet State Props
 * @typedef {object} tweetStateProps
 * @property {id} authedUser - The authed user
 * @property {tweet} tweet - A tweet
 */
