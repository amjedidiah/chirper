// Module imports
import React from "react";
import { connect } from "react-redux";

// Component imports
import List from "./List";

//Action imports
import {
  handleAddTodo,
  handleToggle,
  handleDeleteTodo,
} from "../actions/todos";

/**
 * Todos component
 * @constructor
 */
class Todos extends React.Component {
  /**
   * Adds a todo
   * @param {object} e - JS event object
   */
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };

  /**
   * Removes a todo
   * @param {todo} todo - The todo to remove
   * @returns {promise}
   */
  removeItem = (todo) => this.props.dispatch(handleDeleteTodo(todo));

  /**
   * Toggles a todo
   * @param {id} id - The todo id to toggle
   * @returns {promise}
   */
  toggleItem = (id) => this.props.dispatch(handleToggle(id));

  /**
   * Renders the Todos component UI
   * @returns {object} - The UI DOM object
   */
  render = () => (
    <div>
      <h1>Todos List</h1>

      <form>
        <input
          type="text"
          placeholder="Add Todo"
          aria-label="todo"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
      </form>

      <List
        items={this.props.todos}
        remove={this.removeItem}
        toggle={this.toggleItem}
      />
    </div>
  );
}
export default connect(({ todos }) => ({
  todos,
}))(Todos);
