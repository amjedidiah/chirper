/**
 ** TYPE DEFINITIONS
 */
/**
 * Definition for store
 * @typedef {Object} store
 * @property {function} dispatch - Updates store state
 * @property {function} getState - Gets store state
 * @property {function} subscribe - Listens for changes
 */

/**
 * Definition for action
 * @typedef {Object} action
 * @property {string} type - action type
 */

/**
 * Definition for loading
 * @typedef {boolean} loading - loading
 */

/**
 * Definition for id
 * @typedef {string} id - A goal or todo id
 */

/**
 * Definition for Goal
 * @typedef {Object} goal
 * @property {id} id - goal ID
 * @property {string} name - goal name
 */

/**
 * Definition for Todo
 * @typedef {Object} todo
 * @property {id} id - todo ID
 * @property {boolean} complete - todo complete status
 * @property {string} name - todo name
 */

/**
 * Alternative todos state definition for a function
 * @param {Object[]} state - Store state
 * @param {id} state[].id - todo ID
 */

/**
 * Alternative action definition for a function
 * @param {Object} action - Action chnaging the state
 * @param {string}  action.type - Type of the action
 */
