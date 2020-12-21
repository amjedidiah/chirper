// Type definitions
import "../defiinitions.js";

/**
 * Todo reducer
 * @param {todo[]} [state=[]] - Todo state
 * @param {action} action - Action changing the state
 * @returns {todo[]} - Updated state
 */
const todos = (state = [], action) =>
  ({
    ADD_TODO: [...state, action.todo],
    RECEIVE_DATA: action.todos,
    REMOVE_TODO: state.filter(({ id }) => id !== action.id),
    TOGGLE_TODO: state.map((todo) =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
    ),
  }[action.type] || state);

export default todos;
