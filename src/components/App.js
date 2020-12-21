// Module imports
import React from "react";
import { connect } from "react-redux";

// Component imports
import ConnectedGoals from "./Goals";
import ConnectedTodos from "./Todos";

// Action imports
import { handleInitialData } from "../actions/shared";

/**
 * App component
 * @constructor
 */
class App extends React.Component {
  /**
   * Lifecycle method that runs after component has mounted
   */
  componentDidMount = () => this.props.dispatch(handleInitialData());

  /**
   * Renders the App component UI
   * @returns {object} - The UI DOM object
   */
  render = () =>
    !this.props.loading ? (
      <h3>loading</h3>
    ) : (
      <div>
        <h2>App</h2>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
}
export default connect(({ loading }) => ({
  loading,
}))(App);
