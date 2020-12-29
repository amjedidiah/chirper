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
 * Definition for info
 * @typedef {object} info
 * @property {id} authedUser - The authedUser ID
 * @property {id} id - The tweet ID
 * @property {boolean} hasLiked - If the tweet has been liked or not
 */

/**
 * Definition for match
 * @typedef {object} match
 * @property {object} params
 * @property {id} params.id
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
 * MAPSTATETOPROPS DEFINITIONS
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
 * TweetState Props
 * @typedef {object} tweetStateProps
 * @property {id} authedUser - The authed user
 * @property {tweet} tweet - A tweet
 */
/**
 * TweetForm State Props
 * @typedef {object} tweetFormStateProps
 * @property {id} authedUser - The authed user
 */
/**
 * TweetPage State Props
 * @typedef {object} tweetPageStateProps
 * @property {id} id - Tweet ID
 * @property {id[] | []} replies - List of tweet IDs that are replies
 */


/**
  * COMPONENT PROPS DEFINITIONS
  */
/**
 * Dashboard Props
 * @typedef {object} tweetPageProps
 * @property {id} id - ID of particular tweet
 * @property {id[]} replies - IDs of tweet replies
 */
/**
 * TweetPage Props
 * @typedef {object} dashboardProps
 * @property {id[]} tweetIDs - ID of tweets
 */
/**
 * TweetReplies Props
 * @typedef {object} tweetRepliesProps
 * @property {id[]} replies - IDs of tweet replies
 */
