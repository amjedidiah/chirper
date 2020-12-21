// Module imports
import API from "goals-todos-api";

//Type Definitions
import "../defiinitions"

/**
 * ACTION TYPES
 */
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

/**
 * SYNC ACTION CREATORS 
 */
/**
 * Action creator to add a goal
 * @param {goal} goal - The goal to add
 * @returns {{type: string, goal: goal}}
 */
const addGoal = (goal) => ({ type: ADD_GOAL, goal });

/**
 * Action craetor to remove a goal
 * @param {id} id - id of goal to remove
 * @returns {{type: string, id: id}}
 */
const removeGoal = (id) => ({ type: REMOVE_GOAL, id });

/**
 * ASYNC ACTION CREATORS
 */
/**
 * Async action creator to add goal
 * @param {string} goalName - name of goal to add
 * @param {function} cb - callback function to empty form input
 * @returns {promise}
 */
export const handleAddGoal = (goalName, cb) => (dispatch) =>
  API.saveGoal(goalName)
    .then((goal) => {
      cb();

      dispatch(addGoal(goal));
    })
    .catch((err) => alert("An error occurred. Try again"));

/**
 * Async action creator to delete goal
 * @param {goal} goal - The goal to delete
 * @return {promise}
 */
export const handleDeleteGoal = (goal) => (dispatch) => {
  dispatch(removeGoal(goal.id));

  return API.deleteGoal(goal.id).catch(() => {
    alert("An error occurred. Try again");
    dispatch(addGoal(goal));
  });
};
