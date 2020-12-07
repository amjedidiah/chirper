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
 * Definition for the rootReducer state
 * @typedef {Object} appState
 * @property {todo[]} todos - todos state
 * @property {goal[]} goals - goals state
 */

/**
 * Alternative todos state definition for a function
 * @param {Object[]} state - Store state
 * @param {string} state[].id - todo ID
 */

/**
 * Alternative action definition for a function
 * @param {Object} action - Action chnaging the state
 * @param {string}  action.type - Type of the action
 */

/**
 * Definition for TODO
 * @typedef {Object} todo
 * @property {string} id - todo ID
 * @property {boolean} complete - todo complete status
 * @property {string} name - todo name
 */

/**
 * Definition for Goal
 * @typedef {Object} goal
 * @property {string} id - goal ID
 * @property {string} name - goal name
 */

/**
 * Definition for id
 * @typedef {string} id - A goal or todo id
 */
