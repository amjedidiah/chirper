// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Container imports
import Dashboard from 'containers/Dashboard';

/**
 * App component
 */
export class App extends Component {
  /**
   * App propTypes
   */
  static propTypes = {
    handleInitialData: PropTypes.func,
    loading: PropTypes.bool,
  };

  /**
   * Executes once component mounts
   */
  componentDidMount() {
    this.props.handleInitialData();
  }

  /**
   * Renders the App UI
   * @return {object} The UI DOM object
   */
  render() {
    return <div>{this.props.loading ? <p>Loading</p> : <Dashboard />}</div>;
  }
}

/**
 * Maps state to Dashboard component props
 * @param {state} state
 * @return {appStateProps}
 */
const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null,
});

// App export
export default connect(mapStateToProps, {handleInitialData})(App);
