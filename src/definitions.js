/**
 * Definition for redux action
 * @typedef {Object} action
 * @property {string} type - Action type
 */

/**
 * Definition for id
 * @typedef {string} id
 */

/**
 * Definition for state
 * @typedef {object} state
 * @property {string} autheduser - The autheduser ID
 * @property {tweets} tweets - All tweets
 * @property {users} users - All users
 */

/**
 * Definition for store
 * @typedef {object} store
 * @property {function} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {funtion} subscribe - Adds functions to execute on state change
 */

/**
 * Definition for tweet
 * @typedef {Object} tweet
 * @property {string} id - the id of this tweet
 */

/**
 * Definition for tweets
 * @typedef {Object} tweets
 * @property {string} tweetID - the id of a particuular tweet
 */

/**
 * Definition for user
 * @typedef {Object} user
 * @property {string} id - the id of this user
 */

/**
 * Definition for users
 * @typedef {Object} users
 * @property {string} userID - the id of a particular user
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
