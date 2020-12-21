// Module imports
import API from "goals-todos-api";

//Type Definitions
import "../defiinitions"


/**
 * ACTION TYPES
 */
const RECEIVE_DATA = "RECEIVE_DATA";

/**
 * SYNC ACTION CREATORS
 */
/**
 * Add todos and goals from DB to store
 * @param {goal[]} goals - goals to add
 * @param {todo[]} todos - todos to add
 * @returns {{type: string, goals:goal[], todos: todo[]}}
 */
const receiveData = (goals, todos) => ({
  type: RECEIVE_DATA,
  goals,
  todos,
});

/**
 * ASYNC ACTION CREATORS
 */
/**
   * Async action creator to fetch Initial data from DB
   * @returns {promise}
   * 
   * The Promise.all method
   * - faster response time: all start at the same time(async)
   * - returns error for all if one fails, i.e prevents all from executing
   * 
   * Async-await 
   * - slower response time: wait for one to complete before starting another (sync)
   * - returns error for each that fails, i.e passes all before the one
   *   that failed and fails all after the one that failed
   * 
   * We use Promise.all here because we need both to work for the app to work
   * 
   * const handleInitialData = () => async (dispatch) => {
    try {
      const goals = await API.fetchGoals();
      const todos = await API.fetchTodos();
  
      return dispatch(receiveData(goals, todos));
    } catch (error) {
      console.log(error);
    }
  }; 
   */
export const handleInitialData = () => (dispatch) =>
  Promise.all([API.fetchGoals(), API.fetchTodos()]).then(([goals, todos]) => {
    dispatch(receiveData(goals, todos));
  });
