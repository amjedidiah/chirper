// Module imports
import React from "react";
import {connect} from "react-redux";

// Component imports
import List from "./List";

// Action imports
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";

/**
 * Goals component
 * @constructor
 */
class Goals extends React.Component {
  /**
   * Adds a goal
   * @param {object} e - JS event object
   */
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ""))
    );
  };

  /**
   * Removes a goal
   * @param {goal} goal - The goal to remove
   * @returns {promise}
   */
  removeItem = (goal) => this.props.dispatch(handleDeleteGoal(goal));

  /**
   * Renders the Goals component UI
   * @returns {object} - the UI DOM object
   */
  render = () => (
    <div>
      <h1>Goals</h1>

      <form>
        <input
          type="text"
          placeholder="Add Goal"
          aria-label="goal"
          ref={(input) => (this.input = input)}
        />

        <button onClick={this.addItem}>Add Goal</button>
      </form>
      <List items={this.props.goals} remove={this.removeItem} />
    </div>
  );
}

export default connect(({ goals }) => ({
  goals,
}))(Goals);
