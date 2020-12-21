// Module imports
import API from "goals-todos-api";

//Type Definitions
import "../defiinitions";

/**
 * ACTION TYPES
 */
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

/**
 * SYNC ACTION CREATORS
 */

/**
 * Action creator to add a todo
 * @param {todo} todo - todo to add
 * @returns {{type: string, todo: todo}}
 */
const addTodo = (todo) => ({ type: ADD_TODO, todo });

/**
 * Action creator to remove a todo
 * @param {id} id  - id of todo to remove
 * @returns {{type:string: id:id}}
 */
const removeTodo = (id) => ({ type: REMOVE_TODO, id });

/**
 * Action creator to toggle a todo
 * @param {id} id - id of todo to toggle
 * @returns {{type: string, id: id}}
 */
const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

/**
 * ASYNC ACTIONS CREATORS
 */

/**
 * Async action creator to add todo
 * @param {string} todoName - todo name to add
 * @param {function} cb - callback fundtion to empty formm input
 * @returns {promise}
 */
export const handleAddTodo = (todoName, cb) => (dispatch) =>
  API.saveTodo(todoName)
    .then((todo) => {
      cb();
      dispatch(addTodo(todo));
    })
    .catch(() => alert("An error occurred. Try again"));

/**
 * Async action creator to remove todo
 * @param {todo} todo - todo to remove
 * @return {promise}
 */
export const handleDeleteTodo = (todo) => (dispatch) => {
  dispatch(removeTodo(todo.id));

  return API.deleteTodo(todo.id).catch(() => {
    alert("An error occurred. Try again");
    dispatch(addTodo(todo));
  });
};

/**
 * Async action creator to toggle todo
 * @param {id} id - id of todo to toggle
 * @returns {promise}
 */
export const handleToggle = (id) => (dispatch) => {
  dispatch(toggleTodo(id));

  return API.saveTodoToggle(id).catch(() => {
    alert("An error occurred. Try again");
    dispatch(toggleTodo(id));
  });
};
