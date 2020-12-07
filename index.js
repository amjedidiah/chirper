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

/**
 *! APP CODE
 */

/**
 ** ACTION TYPES
 */
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

/**
 ** ACTION CREATORS
 */
const addGoalAction = (goal) => ({ type: ADD_GOAL, goal });
const removeGoalAction = (id) => ({ type: REMOVE_GOAL, id });
const addTodoAction = (todo) => ({ type: ADD_TODO, todo });
const removeTodoAction = (id) => ({ type: REMOVE_TODO, id });
const toggleTodoAction = (id) => ({ type: TOGGLE_TODO, id });

/**
 ** TODO reducer
 * @param {todo[]} [state=[]] - Todo state
 * @param {action} action - Action changing the state
 * @returns {todo[]} - Updated state
 */
const todos = (state = [], action) =>
  ({
    ADD_TODO: [...state, action.todo],
    REMOVE_TODO: state.filter(({ id }) => id !== action.id),
    TOGGLE_TODO: state.map((todo) =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
    ),
  }[action.type] || state);

/**
 ** Goal Reducer
 * @param {goal[]} [state=[]] - Goal state
 * @param {action} action  - Action changing the state
 * @returns {goal[]} - Updated state
 */
const goals = (state = [], action) =>
  ({
    ADD_GOAL: [...state, action.goal],
    REMOVE_GOAL: state.filter(({ id }) => id !== action.id),
  }[action.type] || state);

/**
 ** STORE CODE
 */

/**
 * Bitcoin checker Middleware
 * @param {store} store - The redux store
 * @returns {function}
 */
const checker = (store) => (next) => (action) => {
  if (
    (action.type === "ADD_TODO" &&
      action.todo.name.toLowerCase().includes("bitcoin")) ||
    (action.type === "ADD_GOAL" &&
      action.goal.name.toLowerCase().includes("bitcoin"))
  )
    return alert("This is a bad idea");

  return next(action);
};

/**
 * Logger middleware
 * @param {store} store - The redux store
 * @returns {function}
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The current state:", store.getState());
  console.log("The action:", action);
  const result = next(action);
  console.log("The new state:", store.getState());
  console.groupEnd();

  return result;
};

const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals,
  }),
  Redux.applyMiddleware(checker, logger)
);

/**
 * Generates Random ID
 * @returns {id}
 */
const generateId = () =>
  Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
