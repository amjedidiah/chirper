// Type definitions
import "../defiinitions.js"

/**
 * Goal Reducer
 * @param {goal[]} [state=[]] - Goal state
 * @param {action} action  - Action changing the state
 * @returns {goal[]} - Updated state
 */
const goals = (state = [], action) =>
  ({
    ADD_GOAL: [...state, action.goal],
    RECEIVE_DATA: action.goals,
    REMOVE_GOAL: state.filter(({ id }) => id !== action.id),
  }[action.type] || state);

export default goals;
